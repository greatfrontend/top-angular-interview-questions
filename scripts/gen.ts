import GitHubSlugger from 'github-slugger';
import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import util from 'util';
import url from 'node:url';
import { QuestionFrontmatter, QuestionItem, QuestionMetadata } from './types';

const README_PATH_EN = 'README.md';

const readFileAsync = util.promisify(fs.readFile);

const slugger = new GitHubSlugger();

async function processQuestion(
  dirName: string,
  locale: string = 'en-US'
): Promise<QuestionItem | null> {
  const metadataPath = path.join('./questions', dirName, 'metadata.json');
  const localeFile = path.join('./questions', dirName, locale + '.mdx');

  const [metadataFile, markdownFile] = await Promise.all([
    readFileAsync(metadataPath),
    readFileAsync(localeFile),
  ]);

  const metadata: QuestionMetadata = JSON.parse(String(metadataFile));
  const markdown = String(markdownFile);

  if (dirName !== metadata.slug) {
    throw `${dirName} !== ${metadata.slug}`;
  }

  if (!metadata.featured) {
    return null;
  }

  const { data } = grayMatter(markdown);
  const frontMatter = data as QuestionFrontmatter;

  const title = frontMatter.title;
  if (!title) {
    console.warn(`${localeFile} does not have title`);
    return null;
  }

  // Extract contents between the first `## TL;DR` and `---`.
  const content = markdown.match(/## TL;DR\n\n([\s\S]*?)---\n/);

  const tlDrPart = content?.[1];
  if (tlDrPart == null) {
    return null;
  }

  // TODO: use a more robust check for headings.
  if (tlDrPart.includes('###')) {
    throw `${localeFile}'s TL;DR contains headings`;
  }

  return {
    locale,
    metadata,
    href:
      'https://www.greatfrontend.com' +
      url.format({
        pathname: `/questions/quiz/${metadata.slug}`,
        query: {
          framework: 'angular',
          tab: 'quiz',
        },
      }),
    title,
    titleSlug: slugger.slug(title),
    content: tlDrPart
      // Replace relative links with absolute links.
      .replace('](/', '](https://www.greatfrontend.com/')
      .trim(),
  };
}

async function readQuestionsList() {
  const qnSlugs = fs
    .readdirSync('./questions', {
      withFileTypes: true,
    })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  return qnSlugs;
}

async function processQuestionList(qns: string[]) {
  const questionObjectsIncludingNull = await Promise.all(
    qns.map(qnSlug => processQuestion(qnSlug))
  );

  return questionObjectsIncludingNull.flatMap(item =>
    item != null ? [item] : []
  );
}

function formatTableOfContents(qnList: QuestionItem[]) {
  const tableOfContentsLines = ['| No. | Questions |', '| --- | --------- |'];

  qnList.forEach(({ title, titleSlug }, index) =>
    tableOfContentsLines.push(`| ${index + 1} | [${title}](#${titleSlug}) |`)
  );

  return tableOfContentsLines.join('\n');
}

function formatQuestion(qn: QuestionItem, index: number) {
  return `${index}. ### ${qn.title}

    <!-- Update here: /questions/${qn.metadata.slug}/${qn.locale}.mdx -->

${qn.content
  .split('\n')
  // Add indentation.
  .map(line => '    ' + line)
  .join('\n')}

    <!-- Update here: /questions/${qn.metadata.slug}/${qn.locale}.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions?gnrs=github) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>
`;
}

async function generate() {
  const qns = await readQuestionsList();
  const qnItemList = await processQuestionList(qns);
  const qnsItemListSorted = qnItemList.sort(
    (a, b) => a.metadata.ranking - b.metadata.ranking
  );
  const qnTableOfContents = formatTableOfContents(qnsItemListSorted);
  const qnAnswers = qnsItemListSorted
    .map((qnItem, index) => formatQuestion(qnItem, index + 1))
    .join('\n');

  const readmeFile = String(fs.readFileSync(README_PATH_EN));

  const updatedText = readmeFile
    .replace(
      /(<!-- TABLE_OF_CONTENTS:START -->)([\s\S]*?)(<!-- TABLE_OF_CONTENTS:END -->)/,
      `$1\n\n${qnTableOfContents}\n\n$3`
    )
    .replace(
      /(<!-- QUESTIONS:START -->)([\s\S]*?)(<!-- QUESTIONS:END -->)/,
      `$1\n\n${qnAnswers}\n\n$3`
    );

  fs.writeFileSync(README_PATH_EN, updatedText);
}

generate();
