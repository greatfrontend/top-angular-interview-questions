# Top Angular Interview Questions

Curated top Angular interview questions with high quality answers for acing your front end interviews.

## Table of Contents

<!-- TABLE_OF_CONTENTS:START -->

| No. | Questions                                                                                                                                                                        |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | [What is Angular and how is it different from AngularJS?](#what-is-angular-and-how-is-it-different-from-angularjs)                                                               |
| 2   | [How does an Angular application work?](#how-does-an-angular-application-work)                                                                                                   |
| 3   | [What is angular CLI?](#what-is-angular-cli)                                                                                                                                     |
| 4   | [What are components?](#what-are-components)                                                                                                                                     |
| 5   | [What is an ngModule?](#what-is-an-ngmodule)                                                                                                                                     |
| 6   | [What are templates?](#what-are-templates)                                                                                                                                       |
| 7   | [What is metadata or annotation?](#what-is-metadata-or-annotation)                                                                                                               |
| 8   | [What are decorators?](#what-are-decorators)                                                                                                                                     |
| 9   | [What are directives and what are its types?](#what-are-directives-and-what-are-its-types)                                                                                       |
| 10  | [What are the differences between component and directive?](#what-are-the-differences-between-component-and-directive)                                                           |
| 11  | [What are the key components in Angular?](#what-are-the-key-components-in-angular)                                                                                               |
| 12  | [What is the difference between `constructor` and `ngOnInit()`?](#what-is-the-difference-between-constructor-and-ngoninit)                                                       |
| 13  | [What are the different component’s lifecycle hooks?](#what-are-the-different-components-lifecycle-hooks)                                                                        |
| 14  | [What is interpolation?](#what-is-interpolation)                                                                                                                                 |
| 15  | [What is a template reference variable?](#what-is-a-template-reference-variable)                                                                                                 |
| 16  | [How do you handle events in Angular templates?](#how-do-you-handle-events-in-angular-templates)                                                                                 |
| 17  | [What is a bootstrapping module?](#what-is-a-bootstrapping-module)                                                                                                               |
| 18  | [What is a service in Angular and how do you create one?](#what-is-a-service-in-angular-and-how-do-you-create-one)                                                               |
| 19  | [What is dependency injection in Angular?](#what-is-dependency-injection-in-angular)                                                                                             |
| 20  | [What is Angular Material?](#what-is-angular-material)                                                                                                                           |
| 21  | [What are pipes and how is it used?](#what-are-pipes-and-how-is-it-used)                                                                                                         |
| 22  | [What is content projection?](#what-is-content-projection)                                                                                                                       |
| 23  | [How does Angular handle view encapsulation and what are the different strategies?](#how-does-angular-handle-view-encapsulation-and-what-are-the-different-strategies)           |
| 24  | [What is control flow in Angular?](#what-is-control-flow-in-angular)                                                                                                             |
| 25  | [What is the purpose of `ngFor` `trackBy`?](#what-is-the-purpose-of-ngfor-trackby)                                                                                               |
| 26  | [What are `viewChild()` and `contentChild()` and how do they differ?](#what-are-viewchild-and-contentchild-and-how-do-they-differ)                                               |
| 27  | [What is a standalone component?](#what-is-a-standalone-component)                                                                                                               |
| 28  | [What is a singleton service and how can it be achieved?](#what-is-a-singleton-service-and-how-can-it-be-achieved)                                                               |
| 29  | [What is the dependency injection hierarchy in Angular?](#what-is-the-dependency-injection-hierarchy-in-angular)                                                                 |
| 30  | [What are signals and why is it introduced?](#what-are-signals-and-why-is-it-introduced)                                                                                         |
| 31  | [Explain data bindings and the different types.](#explain-data-bindings-and-the-different-types)                                                                                 |
| 32  | [What are template expressions and template statements?](#what-are-template-expressions-and-template-statements)                                                                 |
| 33  | [What is property binding? How is it different from event binding?](#what-is-property-binding-how-is-it-different-from-event-binding)                                            |
| 34  | [How is data shared between components?](#how-is-data-shared-between-components)                                                                                                 |
| 35  | [What are host bindings and host listeners?](#what-are-host-bindings-and-host-listeners)                                                                                         |
| 36  | [What is the purpose of `@Input` and `@Output` decorators?](#what-is-the-purpose-of-input-and-output-decorators)                                                                 |
| 37  | [How does Angular handle forms?](#how-does-angular-handle-forms)                                                                                                                 |
| 38  | [What are the differences between reactive forms and template driven forms?](#what-are-the-differences-between-reactive-forms-and-template-driven-forms)                         |
| 39  | [What is the purpose of FormBuilder?](#what-is-the-purpose-of-formbuilder)                                                                                                       |
| 40  | [What are the different ways to group form controls?](#what-are-the-different-ways-to-group-form-controls)                                                                       |
| 41  | [How do you create custom validators in Angular?](#how-do-you-create-custom-validators-in-angular)                                                                               |
| 42  | [What is Angular Routing and how do you set it up?](#what-is-angular-routing-and-how-do-you-set-it-up)                                                                           |
| 43  | [What are router links and how are they used?](#what-are-router-links-and-how-are-they-used)                                                                                     |
| 44  | [How do you pass parameters in Angular routes?](#how-do-you-pass-parameters-in-angular-routes)                                                                                   |
| 45  | [What is the wild card route?](#what-is-the-wild-card-route)                                                                                                                     |
| 46  | [What is a router outlet?](#what-is-a-router-outlet)                                                                                                                             |
| 47  | [What is the router state?](#what-is-the-router-state)                                                                                                                           |
| 48  | [What are Angular Guards and how are they used?](#what-are-angular-guards-and-how-are-they-used)                                                                                 |
| 49  | [What is the purpose of the async pipe in Angular templates?](#what-is-the-purpose-of-the-async-pipe-in-angular-templates)                                                       |
| 50  | [What is the difference between pure and impure pipe?](#what-is-the-difference-between-pure-and-impure-pipe)                                                                     |
| 51  | [How do you write a custom pipe?](#how-do-you-write-a-custom-pipe)                                                                                                               |
| 52  | [Explain different types of compilation Angular provides and why is the need for it.](#explain-different-types-of-compilation-angular-provides-and-why-is-the-need-for-it)       |
| 53  | [What is change detection in Angular and how does it work?](#what-is-change-detection-in-angular-and-how-does-it-work)                                                           |
| 54  | [How do you manually trigger change detection?](#how-do-you-manually-trigger-change-detection)                                                                                   |
| 55  | [What is `zone.js` and NgZone?](#what-is-zonejs-and-ngzone)                                                                                                                      |
| 56  | [What is a zoneless Angular application and why is this mode significant?](#what-is-a-zoneless-angular-application-and-why-is-this-mode-significant)                             |
| 57  | [What is Angular Ivy and what advantages does it provide for compilation and rendering?](#what-is-angular-ivy-and-what-advantages-does-it-provide-for-compilation-and-rendering) |
| 58  | [Explain how to use `HttpClient` with an example?](#explain-how-to-use-httpclient-with-an-example)                                                                               |
| 59  | [What is an observable and how is it used?](#what-is-an-observable-and-how-is-it-used)                                                                                           |
| 60  | [What is the difference between Promise and Observable?](#what-is-the-difference-between-promise-and-observable)                                                                 |
| 61  | [What is RxJS?](#what-is-rxjs)                                                                                                                                                   |
| 62  | [What is an RxJS Subject?](#what-is-an-rxjs-subject)                                                                                                                             |
| 63  | [What is subscribe in RxJS? How do you unsubscribe?](#what-is-subscribe-in-rxjs-how-do-you-unsubscribe)                                                                          |
| 64  | [How do you create custom RxJS operators?](#how-do-you-create-custom-rxjs-operators)                                                                                             |
| 65  | [What are HTTP interceptors and how are they used?](#what-are-http-interceptors-and-how-are-they-used)                                                                           |
| 66  | [What are some uses of interceptors and can we provide multi-interceptors?](#what-are-some-uses-of-interceptors-and-can-we-provide-multi-interceptors)                           |
| 67  | [What are dynamic components and how do you create them?](#what-are-dynamic-components-and-how-do-you-create-them)                                                               |
| 68  | [What is Renderer2 and why would you use it?](#what-is-renderer2-and-why-would-you-use-it)                                                                                       |
| 69  | [What are Angular elements?](#what-are-angular-elements)                                                                                                                         |
| 70  | [What are custom elements and how does it work internally?](#what-are-custom-elements-and-how-does-it-work-internally)                                                           |
| 71  | [What techniques can improve performance in an Angular app?](#what-techniques-can-improve-performance-in-an-angular-app)                                                         |
| 72  | [What is lazy loading and how do you use it in Angular?](#what-is-lazy-loading-and-how-do-you-use-it-in-angular)                                                                 |
| 73  | [How does Angular support internationalization (i18n) of applications?](#how-does-angular-support-internationalization-i18n-of-applications)                                     |
| 74  | [What is incremental hydration?](#what-is-incremental-hydration)                                                                                                                 |
| 75  | [What is TestBed and how is it used in Angular testing?](#what-is-testbed-and-how-is-it-used-in-angular-testing)                                                                 |
| 76  | [What is Protractor and how is it used for end-to-end testing?](#what-is-protractor-and-how-is-it-used-for-end-to-end-testing)                                                   |
| 77  | [What is Component Test Harnesses?](#what-is-component-test-harnesses)                                                                                                           |
| 78  | [What is Angular DevTools and how can it help during development?](#what-is-angular-devtools-and-how-can-it-help-during-development)                                             |
| 79  | [How do you perform error handling?](#how-do-you-perform-error-handling)                                                                                                         |
| 80  | [What happens if you include a `<script>` tag inside a template?](#what-happens-if-you-include-a-script-tag-inside-a-template)                                                   |
| 81  | [What is a service worker and its role in Angular?](#what-is-a-service-worker-and-its-role-in-angular)                                                                           |
| 82  | [What is State function and Style function?](#what-is-state-function-and-style-function)                                                                                         |
| 83  | [What is Angular Universal?](#what-is-angular-universal)                                                                                                                         |

<!-- TABLE_OF_CONTENTS:END -->

## Questions with answers

<!-- QUESTIONS:START -->

1. ### What is Angular and how is it different from AngularJS?

   <!-- Update here: /questions/what-is-angular-vs-angularjs/en-US.mdx -->

   Angular is a modern, open-source framework developed by Google for building large-scale, single-page applications (SPAs) primarily using TypeScript. It follows a component-based architecture and provides a comprehensive set of tools and features for development, including routing, forms, state management, and testing utilities.

   Angular is a complete rewrite of its predecessor, AngularJS (version 1.x), and is not backward compatible. The key differences include:

   - **Architecture**: Angular uses a component-based structure, while AngularJS used MVC/MVVM patterns with controllers and scopes.
   - **Language**: Angular is built with and strongly encourages TypeScript, whereas AngularJS was primarily JavaScript.
   - **Performance**: Angular offers significantly improved performance due to features like Ahead-of-Time (AoT) compilation and a more efficient change detection mechanism.
   - **Mobile Support**: Angular was designed with mobile development in mind from the start.
   - **CLI**: Angular includes a powerful command-line interface (CLI) for scaffolding, building, and testing applications, which was not a built-in feature of AngularJS.

   <!-- Update here: /questions/what-is-angular-vs-angularjs/en-US.mdx -->

   <br>

   > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

   [Back to top ↑](#table-of-contents)
   <br>
   <br>

2. ### How does an Angular application work?

   <!-- Update here: /questions/how-angular-application-works/en-US.mdx -->

   An Angular application starts execution from the `main.ts` file, which bootstraps the root module, typically `AppModule`. This module declares and imports other modules and components needed for the application. The root module then bootstraps the root component, usually `AppComponent`.

   Components are the building blocks of an Angular application, consisting of a TypeScript class for logic, an HTML template for the view, and CSS styles. Angular uses data binding to synchronize data between the component class and its template.

   Angular's compiler processes the application code (TypeScript, HTML, CSS) during the build process, often using Ahead-of-Time (AOT) compilation to produce optimized JavaScript bundles. When the application runs in the browser, Angular takes control of the specified root element in `index.html`, renders the root component's template, and manages updates to the DOM based on changes detected in the application state. Dependency injection is used throughout the application to provide services and other dependencies to components and services.

   <!-- Update here: /questions/how-angular-application-works/en-US.mdx -->

   <br>

   > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

   [Back to top ↑](#table-of-contents)
   <br>
   <br>

3. ### What is angular CLI?

   <!-- Update here: /questions/what-is-angular-cli/en-US.mdx -->

   The Angular CLI (Command Line Interface) is a powerful tool used to initialize, develop, scaffold, and maintain Angular applications directly from a command shell. Its main purpose is to automate common development tasks, enforce best practices, and standardize the project structure, significantly boosting developer productivity.

   You use commands like:

   - `ng new my-app`: Creates a new Angular project
   - `ng generate component my-component`: Generates code for a new component
   - `ng serve`: Builds and serves the application locally for development
   - `ng build`: Compiles the application for deployment
   - `ng test`: Runs unit tests

   It helps you quickly set up projects, add features, run tests, and build for production without manual configuration.

   <!-- Update here: /questions/what-is-angular-cli/en-US.mdx -->

   <br>

   > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

   [Back to top ↑](#table-of-contents)
   <br>
   <br>

4. ### What are components?

   <!-- Update here: /questions/what-are-components/en-US.mdx -->

   Angular components are the fundamental building blocks of an Angular application. They control a patch of the screen called a view. Every component consists of three main parts:

   - A **template**, which is the HTML that defines the component's view
   - A **class**, written in TypeScript, which contains the data and logic for the view
   - **Metadata**, defined by the `@Component` decorator, which tells Angular how to process the class and template, linking them together and defining things like the component's selector (how it's used in other templates) and styles

   Components encapsulate their logic, data, and view, making them reusable and testable units. An Angular application is essentially a tree of nested components.

   <!-- Update here: /questions/what-are-components/en-US.mdx -->

   <br>

   > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

   [Back to top ↑](#table-of-contents)
   <br>
   <br>

5. ### What is an ngModule?

   <!-- Update here: /questions/what-is-ngmodule/en-US.mdx -->

   An `NgModule` is a class decorated with `@NgModule` that defines a module in Angular. It acts as a container for a cohesive block of functionality, grouping related components, directives, pipes, and services.

   Its primary purposes are to:

   - Organize application code into logical units
   - Configure the Angular compiler to process components and templates
   - Configure the injector to make services available for dependency injection
   - Control the visibility of components, directives, and pipes to other modules

   Key properties within the `@NgModule` decorator include:

   - `declarations`: Lists components, directives, and pipes that belong to this module
   - `imports`: Lists other `NgModule`s whose exported classes are needed by components in this module
   - `providers`: Lists services that the injector should create and make available
   - `exports`: Lists components, directives, and pipes from `declarations` (or modules from `imports`) that other modules can use

   While standalone components (available from Angular 14 onwards) reduce the need for `declarations` and `exports` within `NgModule`s, modules are still used for grouping imports and providing services.

   <!-- Update here: /questions/what-is-ngmodule/en-US.mdx -->

   <br>

   > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

   [Back to top ↑](#table-of-contents)
   <br>
   <br>

6. ### What are templates?

   <!-- Update here: /questions/what-are-templates/en-US.mdx -->

   In Angular, templates are HTML fragments that define the structure and appearance of a component's view. They are essentially standard HTML enhanced with Angular-specific syntax, allowing you to dynamically display data, respond to user input, and conditionally render elements. Each component is associated with a template, either defined inline using the `template` property or in a separate file using `templateUrl`. Angular compiles these templates to render the component's UI in the browser.

   <!-- Update here: /questions/what-are-templates/en-US.mdx -->

   <br>

   > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

   [Back to top ↑](#table-of-contents)
   <br>
   <br>

7. ### What is metadata or annotation?

   <!-- Update here: /questions/what-is-metadata-or-annotation/en-US.mdx -->

   In Angular, metadata or annotations are used to configure classes, telling Angular how they should be processed, used, or behave. They are attached to classes using decorators, which are special functions prefixed with the `@` symbol.

   For example:

   - The `@Component` decorator adds metadata to a class, specifying its selector, template, styles, etc.
   - The `@Injectable` decorator adds metadata, indicating that a class can be injected as a dependency.
   - The `@NgModule` decorator adds metadata to configure a module, listing its declarations, imports, providers, and bootstrap components.

   This metadata is crucial for Angular's compiler and runtime to understand the structure and dependencies of your application.

   <!-- Update here: /questions/what-is-metadata-or-annotation/en-US.mdx -->

   <br>

   > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

   [Back to top ↑](#table-of-contents)
   <br>
   <br>

8. ### What are decorators?

   <!-- Update here: /questions/what-are-decorators/en-US.mdx -->

   Decorators in Angular are special kinds of declarations that can be attached to classes, methods, properties, or parameters. They are a TypeScript feature that provides a way to add metadata to code elements. Angular uses decorators extensively to configure classes and their members, telling Angular how they should be processed, instantiated, or interacted with.

   For example:

   - `@Component` tells Angular that a class is a component and provides configuration like its template, styles, and selector.
   - `@Injectable` tells Angular that a class can be injected into other classes, making it part of the dependency injection system.
   - `@Input` marks a property as an input binding, allowing data to flow into a component from its parent.
   - `@Output` marks a property as an output binding, allowing a component to emit events to its parent.

   Essentially, decorators are Angular's way of adding configuration and behavior hints directly within the code structure.

   <!-- Update here: /questions/what-are-decorators/en-US.mdx -->

   <br>

   > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

   [Back to top ↑](#table-of-contents)
   <br>
   <br>

9. ### What are directives and what are its types?

   <!-- Update here: /questions/what-are-directives-types/en-US.mdx -->

   Directives in Angular are classes that add behavior to elements in your application. They allow you to manipulate the DOM, change the appearance of elements, or modify their structure.

   There are three main types of directives:

   - **Component directives**: These are directives with a template. They are the most common type and are essentially custom HTML elements with associated logic and rendering.
   - **Structural directives**: These directives change the DOM layout by adding, removing, or manipulating elements. They are typically prefixed with an asterisk (`*`). Examples include `*ngIf`, `*ngFor`, and `*ngSwitch`.
   - **Attribute directives**: These directives change the appearance or behavior of an existing element, component, or another directive. They are applied as attributes to elements. Examples include `NgClass`, `NgStyle`, and custom attribute directives you create.

   <!-- Update here: /questions/what-are-directives-types/en-US.mdx -->

   <br>

   > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

   [Back to top ↑](#table-of-contents)
   <br>
   <br>

10. ### What are the differences between component and directive?

    <!-- Update here: /questions/what-are-component-vs-directive/en-US.mdx -->

    In Angular, both components and directives are classes decorated with metadata that interact with the DOM. The key difference is their purpose and structure.

    - A **component** is a special type of directive that _always_ has a template. It's used to create reusable UI blocks with their own view, logic, and encapsulated styles. You declare it using the `@Component` decorator.
    - A **directive** modifies the behavior or appearance of an _existing_ DOM element, component, or another directive. It does _not_ have a template or encapsulated styles of its own. You declare it using the `@Directive` decorator.

    Think of components as building blocks for your UI, while directives are tools to enhance or change those blocks or other elements.

    <!-- Update here: /questions/what-are-component-vs-directive/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

11. ### What are the key components in Angular?

    <!-- Update here: /questions/what-are-the-key-components-in-angular/en-US.mdx -->

    The key components in an Angular application are:

    - **Modules (`NgModule`)**: These organize your application into cohesive blocks of functionality. Every Angular app has at least one root module, typically `AppModule`. Modules declare which components, directives, and pipes belong to them and make services available.
    - **Components (`@Component`)**: These are the fundamental building blocks of the user interface. Each component controls a patch of the screen and consists of a TypeScript class with application logic, an HTML template that defines the view, and CSS styles.
    - **Templates**: Written in HTML, templates define the structure and layout of a component's view. They use Angular's template syntax for data binding and directives.
    - **Metadata**: This tells Angular how to process a class. It's attached using decorators like `@Component`, `@NgModule`, and `@Injectable`. Metadata configures the class, linking a component class to its template and styles, or defining a module's imports and declarations.
    - **Data Binding**: This is the communication mechanism between a component's class and its template. It allows data to flow from the class to the template (interpolation, property binding) and from the template to the class (event binding), as well as two-way binding.
    - **Directives (`@Directive`)**: These are classes that modify the DOM. Components are a special type of directive with a template. Other directives like `NgIf` and `NgFor` change the structure of the DOM, while attribute directives change the appearance or behavior of an element.
    - **Services (`@Injectable`)**: These are classes that contain reusable logic or data. They are typically used for tasks like fetching data, logging, or providing shared state. Services are designed to be injected into components or other services using Dependency Injection.
    - **Dependency Injection (DI)**: This is a core design pattern used by Angular to provide instances of dependencies (like services) to classes that need them, rather than the classes creating the dependencies themselves. This makes components and services easier to test and manage.

    <!-- Update here: /questions/what-are-the-key-components-in-angular/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

12. ### What is the difference between `constructor` and `ngOnInit()`?

    <!-- Update here: /questions/what-is-difference-constructor-ngoninit/en-US.mdx -->

    The `constructor` is a standard TypeScript/JavaScript class feature used to initialize class members and perform dependency injection in Angular. It runs first when an instance of the class is created.

    `ngOnInit` is an Angular lifecycle hook that runs _after_ the constructor and _after_ Angular has initialized all data-bound properties (like `@Input()`s). It's the recommended place for most initialization logic in Angular components and services, such as fetching initial data or setting up subscriptions, because you can be sure that inputs are available.

    In short:

    - `constructor`: Basic class setup, dependency injection
    - `ngOnInit`: Angular-specific initialization, access to inputs

    The order is always `constructor` -> `ngOnInit`.

    ```typescript
    import { Component, OnInit, Input } from '@angular/core';

    @Component({
      selector: 'app-example',
      template: '<p>{{ message }}</p>',
    })
    export class ExampleComponent implements OnInit {
      @Input() initialMessage: string = '';
      message: string = '';

      constructor() {
        console.log('Constructor called');
        // initialMessage is NOT guaranteed to be available here
        console.log('initialMessage in constructor:', this.initialMessage); // Might be undefined
      }

      ngOnInit() {
        console.log('ngOnInit called');
        // initialMessage IS guaranteed to be available here
        console.log('initialMessage in ngOnInit:', this.initialMessage); // Will have the input value
        this.message = this.initialMessage || 'Default message';
      }
    }
    ```

    <!-- Update here: /questions/what-is-difference-constructor-ngoninit/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

13. ### What are the different component’s lifecycle hooks?

    <!-- Update here: /questions/what-are-component-lifecycle-hooks/en-US.mdx -->

    Angular components have a lifecycle managed by Angular itself. As the component is created, updated, and destroyed, Angular calls specific methods on the component class at predefined moments. These methods are called lifecycle hooks.

    The most common hooks, in their typical execution order, are:

    - `ngOnChanges`: Called when input properties change
    - `ngOnInit`: Called once after the component is initialized and its inputs are set
    - `ngDoCheck`: Called during every change detection run
    - `ngAfterContentInit`: Called after content projected into the component's view is initialized
    - `ngAfterContentChecked`: Called after the projected content has been checked
    - `ngAfterViewInit`: Called after the component's view and its child views are initialized
    - `ngAfterViewChecked`: Called after the component's view and its child views have been checked
    - `ngOnDestroy`: Called just before the component is destroyed

    You implement a hook by declaring a method with the corresponding name on your component class and optionally implementing the associated interface (e.g., `OnInit`).

    <!-- Update here: /questions/what-are-component-lifecycle-hooks/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

14. ### What is interpolation?

    <!-- Update here: /questions/what-is-interpolation/en-US.mdx -->

    Interpolation is a one-way data binding technique in Angular that allows you to display data from your component class directly within your HTML template. It uses double curly braces `{{ }}` to embed expressions. Angular evaluates the expression inside the braces and converts the result to a string, which is then inserted into the HTML at that location. It's primarily used to display component property values, results of simple calculations, or function calls. Angular automatically sanitizes the output to prevent cross-site scripting (XSS) attacks.

    <!-- Update here: /questions/what-is-interpolation/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

15. ### What is a template reference variable?

    <!-- Update here: /questions/what-is-template-reference-variable/en-US.mdx -->

    A template reference variable is a way to get a reference to a DOM element, a component instance, a directive instance, or an `NgTemplateOutlet` within your Angular template. You declare it using the hash symbol (`#`) followed by a variable name, like `#myInput`.

    Once declared, you can use this variable anywhere within the same template to interact with the referenced item. For example, you can get the value of an input field (`#myInput.value`), call a method on a component instance (`#myComponent.someMethod()`), or access properties of a directive.

    To access a template reference variable from the component class code (e.g., in a method), you use the `@ViewChild` decorator.

    ```html
    <input #nameInput type="text" />
    <button (click)="logInput(nameInput.value)">Log Value</button>

    <my-component #childComponent></my-component>
    <button (click)="callChildMethod(childComponent)">Call Child Method</button>
    ```

    ```typescript
    import { Component, ViewChild, ElementRef } from '@angular/core';
    import { MyComponent } from './my.component'; // Assuming MyComponent exists

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
    })
    export class AppComponent {
      // Accessing the input element
      @ViewChild('nameInput') nameInputRef!: ElementRef;

      // Accessing the component instance
      @ViewChild('childComponent') childComponentRef!: MyComponent;

      logInput(value: string): void {
        console.log('Input value:', value);
        // Or using @ViewChild:
        // console.log('Input value from ViewChild:', this.nameInputRef.nativeElement.value);
      }

      callChildMethod(child: MyComponent): void {
        // Using the variable directly from the template context
        child.someMethod();
        // Or using @ViewChild:
        // this.childComponentRef.someMethod();
      }
    }
    ```

    <!-- Update here: /questions/what-is-template-reference-variable/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

16. ### How do you handle events in Angular templates?

    <!-- Update here: /questions/how-handle-events-angular-templates/en-US.mdx -->

    In Angular templates, you handle events using event binding syntax, which looks like `(eventName)="statement"`. The `eventName` is typically a standard DOM event like `click`, `input`, or `submit`, but it can also be a custom event emitted by a component using `@Output`. The `statement` is a template statement that Angular executes when the event occurs, usually involving calling a method defined in the component class. You can access the event payload using the `$event` variable within the statement.

    For example, to handle a button click:

    ```html
    <button (click)="saveData()">Save</button>
    ```

    To get the input value from an input field:

    ```html
    <input (input)="onInput($event)" />
    ```

    And in the component class:

    ```typescript
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-my-component',
      templateUrl: './my-component.html',
    })
    export class MyComponent {
      saveData() {
        console.log('Data saved!');
      }

      onInput(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        console.log('Input value:', inputElement.value);
      }
    }
    ```

    <!-- Update here: /questions/how-handle-events-angular-templates/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

17. ### What is a bootstrapping module?

    <!-- Update here: /questions/what-is-bootstrapping-module/en-US.mdx -->

    In Angular, the bootstrapping module is the root module of your application, typically named `AppModule`. It's the starting point that Angular uses to launch your application.

    It's configured using the `@NgModule` decorator and must include a `bootstrap` array within its metadata. This array lists the components that Angular should bootstrap when the module is bootstrapped. For the root module, this array usually contains just one component, the root component (e.g., `AppComponent`), which is the first component rendered in the browser's DOM.

    The actual bootstrapping process is initiated in the application's entry file, usually `main.ts`, by calling `platformBrowserDynamic().bootstrapModule(AppModule)`. This tells Angular to load and initialize the `AppModule` and then render the components listed in its `bootstrap` array.

    <!-- Update here: /questions/what-is-bootstrapping-module/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

18. ### What is a service in Angular and how do you create one?

    <!-- Update here: /questions/what-is-service-angular-how-create/en-US.mdx -->

    An Angular service is a class used to encapsulate logic, data fetching, or shared functionality that isn't directly tied to the user interface. They promote separation of concerns, making your code more modular, reusable, and testable.

    You typically create a service using the Angular CLI:

    ```bash
    ng generate service data
    ```

    This command creates a class decorated with `@Injectable()`. The `@Injectable()` decorator marks the class as a potential target for dependency injection and, when used with `providedIn: 'root'`, makes the service a singleton available throughout your application. You then inject the service into components or other services that need to use its functionality via their constructors.

    <!-- Update here: /questions/what-is-service-angular-how-create/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

19. ### What is dependency injection in Angular?

    <!-- Update here: /questions/what-is-dependency-injection-angular/en-US.mdx -->

    Dependency Injection (DI) is a design pattern where a class receives its dependencies from an external source rather than creating them itself. In Angular, it's a core mechanism used to provide instances of services or other objects to components, directives, pipes, and other services.

    The main benefits are:

    - **Testability:** Easily swap real dependencies with mock versions for testing
    - **Maintainability:** Reduces coupling between classes
    - **Modularity:** Makes components and services more reusable

    Angular's DI system works with:

    - **Injectors:** Containers that hold and manage instances of dependencies
    - **Providers:** Configure how an injector should create an instance of a dependency
    - **Dependencies:** The objects or services that a class needs

    You typically inject dependencies into a class's constructor using the `@Injectable()` decorator on the dependency and type hinting:

    ```typescript
    import { Injectable } from '@angular/core';

    @Injectable({
      providedIn: 'root', // Makes the service a singleton available throughout the app
    })
    export class DataService {
      getData() {
        /* ... */
      }
    }
    ```

    ```typescript
    import { Component } from '@angular/core';
    import { DataService } from './data.service';

    @Component({
      /* ... */
    })
    export class MyComponent {
      constructor(private dataService: DataService) {
        // dataService is now an instance provided by Angular's DI
      }
    }
    ```

    Angular handles creating the `DataService` instance and providing it to `MyComponent`'s constructor based on the provider configuration.

    <!-- Update here: /questions/what-is-dependency-injection-angular/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

20. ### What is Angular Material?

    <!-- Update here: /questions/what-is-angular-material/en-US.mdx -->

    Angular Material is a UI component library for Angular applications that implements Google's Material Design principles. Its main purpose is to provide a set of high-quality, pre-built, and accessible UI components like buttons, forms, navigation, data tables, and more.

    Using Angular Material helps developers:

    - Quickly build consistent and visually appealing user interfaces
    - Ensure accessibility compliance (ARIA, keyboard navigation)
    - Implement responsive designs easily
    - Apply consistent theming across the application

    You typically add it to your project using the Angular CLI command `ng add @angular/material`.

    <!-- Update here: /questions/what-is-angular-material/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

21. ### What are pipes and how is it used?

    <!-- Update here: /questions/what-are-pipes-how-used/en-US.mdx -->

    Pipes in Angular are a way to transform data for display directly within your templates. They take data as input and return transformed data as output, without changing the original data source.

    You use the pipe operator (`|`) in template expressions:

    ```html
    {{ data | pipeName }} {{ data | pipeName: arg1: arg2 }} {{ data | pipe1 |
    pipe2 }}
    ```

    Angular provides built-in pipes like `DatePipe`, `CurrencyPipe`, `UpperCasePipe`, `JsonPipe`, and `AsyncPipe`. You can also create custom pipes by implementing the `PipeTransform` interface and decorating the class with `@Pipe`. Pipes help keep your component logic clean by moving presentation logic to the template.

    <!-- Update here: /questions/what-are-pipes-how-used/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

22. ### What is content projection?

    <!-- Update here: /questions/what-is-content-projection/en-US.mdx -->

    Content projection in Angular is a pattern where you can pass HTML content from a parent component and "project" it into a specific place within a child component's template. It's similar to the concept of `children` props in React or slots in Vue. The primary element used for content projection is `<ng-content>`.

    It allows you to create reusable components that don't need to know the exact content they will display, making them more flexible. You define placeholders in the child component's template using `<ng-content>`, and the parent component provides the actual content between the child component's tags.

    For example, a simple card component might use `<ng-content>` to project the card's body content:

    ```html
    <!-- Parent Component Template -->
    <app-card>
      <h2>Card Title</h2>
      <p>This is the card body content.</p>
    </app-card>
    ```

    ```html
    <!-- Child Component (app-card) Template -->
    <div class="card">
      <div class="card-header">...</div>
      <div class="card-body">
        <ng-content></ng-content>
        <!-- Content from parent is projected here -->
      </div>
      <div class="card-footer">...</div>
    </div>
    ```

    You can also project multiple pieces of content into different slots using the `select` attribute on `<ng-content>`.

    <!-- Update here: /questions/what-is-content-projection/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

23. ### How does Angular handle view encapsulation and what are the different strategies?

    <!-- Update here: /questions/how-angular-handle-view-encapsulation/en-US.mdx -->

    Angular's view encapsulation determines how the component's styles affect the rest of the application and vice versa. Its main purpose is to isolate component styles to prevent conflicts and make components reusable.

    There are three strategies:

    - `Emulated` (Default): Angular adds unique attributes to component's host element and its content, then scopes the CSS rules using these attributes. This prevents component styles from leaking out but allows global styles to affect the component.
    - `ShadowDom` (Available from Angular 6 onwards): Angular uses the browser's native Shadow DOM API to attach a shadow root to the component's host element. The component's template and styles are placed inside this shadow root, providing true style isolation.
    - `None`: No view encapsulation is applied. The component's styles become global styles, affecting the entire application.

    You configure the strategy using the `encapsulation` property in the `@Component` decorator, like `encapsulation: ViewEncapsulation.None`.

    <!-- Update here: /questions/how-angular-handle-view-encapsulation/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

24. ### What is control flow in Angular?

    <!-- Update here: /questions/what-is-control-flow-angular/en-US.mdx -->

    Angular's built-in control flow, available from Angular 17 onwards, is a new syntax for handling conditional rendering and list iteration directly within component templates. It replaces the older structural directives like `*ngIf`, `*ngFor`, and `*ngSwitch`.

    The new syntax uses block-like structures starting with `@`:

    - `@if`: For conditional rendering, similar to `*ngIf`, supporting `@else if` and `@else` blocks.
    - `@for`: For iterating over collections, similar to `*ngFor`, supporting an `@empty` block and requiring a `track` function for efficient updates.
    - `@switch`: For rendering one block based on a condition, similar to `*ngSwitch`, using `@case` and `@default` blocks.

    This new control flow offers several advantages:

    - Improved performance, especially for `@for` loops due to mandatory tracking.
    - Enhanced readability and simpler syntax without the leading `*`.
    - Better type checking.
    - Reduced bundle size as it's built into the compiler.

    It's the recommended way to handle control flow in modern Angular applications.

    <!-- Update here: /questions/what-is-control-flow-angular/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

25. ### What is the purpose of `ngFor` `trackBy`?

    <!-- Update here: /questions/what-is-ngfor-trackby/en-US.mdx -->

    The `trackBy` function in Angular's `ngFor` directive is used to improve performance when rendering lists. By default, when the collection iterated by `ngFor` changes (items are added, removed, or reordered), Angular re-renders the entire list of DOM elements.

    Using `trackBy`, you provide a function that returns a unique identifier for each item in the collection. Angular then uses this identifier to track items across changes. Instead of re-rendering everything, Angular can efficiently update the DOM by only adding, removing, or moving elements corresponding to items whose identity has changed. This avoids unnecessary destruction and recreation of DOM elements, leading to faster rendering and potentially preserving element state like input focus or scroll position.

    You define a `trackBy` function in your component class:

    ```typescript
    trackById(index: number, item: any): number {
      return item.id; // Assuming each item has a unique 'id' property
    }
    ```

    And use it in your template:

    ```html
    <div *ngFor="let item of items; trackBy: trackById">{{ item.name }}</div>
    ```

    <!-- Update here: /questions/what-is-ngfor-trackby/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

26. ### What are `viewChild()` and `contentChild()` and how do they differ?

    <!-- Update here: /questions/what-are-viewchild-and-contentchild/en-US.mdx -->

    `viewChild()` and `contentChild()` are functions (APIs) introduced in Angular that provide a modern, functional, and signal-based way to query elements or directives from a component's template or projected content. They are available from Angular 17.1 onwards.

    - `viewChild()` queries for the _first_ element or directive within the **component's own template**. It returns a `Signal` that will emit the queried instance (or `undefined`/`null`) after the view is initialized.
    - `contentChild()` queries for the _first_ element or directive that is **projected into the component** via `<ng-content>`. It also returns a `Signal` that will emit the queried instance after the projected content is initialized.

    The core difference is their lookup scope: `viewChild()` looks inside the component's internal view, while `contentChild()` looks within the content provided by a parent component through content projection. Both return reactive Signals, making their values automatically update when the queried element appears or disappears.

    ```typescript
    import {
      Component,
      ElementRef,
      AfterViewInit,
      AfterContentInit,
      viewChild,
      contentChild,
      signal,
      computed,
    } from '@angular/core';

    @Component({
      selector: 'app-my-component',
      template: `
        <p #myViewElement>This is part of the component's view.</p>
        <ng-content></ng-content>
        @if (viewElement()) {
        <p>View element is present!</p>
        } @if (projectedElement()) {
        <p>Projected element is present!</p>
        }
      `,
      standalone: true,
    })
    export class MyComponent implements AfterViewInit, AfterContentInit {
      // Queries the <p> tag within this component's template
      viewElement = viewChild<ElementRef>('myViewElement');

      // Queries an element projected into <ng-content>
      projectedElement = contentChild<ElementRef>('myProjectedElement');

      ngAfterViewInit() {
        // The signal's value is available here, or can be read reactively in templates or effects
        console.log('View Element:', this.viewElement()?.nativeElement);
      }

      ngAfterContentInit() {
        // The signal's value is available here, or can be read reactively in templates or effects
        console.log(
          'Projected Element:',
          this.projectedElement()?.nativeElement
        );
      }
    }
    ```

    ```html
    <!-- Usage of MyComponent -->
    <app-my-component>
      <div #myProjectedElement>This is projected content.</div>
    </app-my-component>
    ```

    <!-- Update here: /questions/what-are-viewchild-and-contentchild/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

27. ### What is a standalone component?

    <!-- Update here: /questions/what-is-standalone-component/en-US.mdx -->

    A standalone component in Angular is a component, directive, or pipe that can be used without being declared in a NgModule. This is achieved by setting the `standalone: true` flag in its decorator.

    The main benefit is simplifying the Angular application structure by reducing the need for NgModules, especially for smaller components or applications. Instead of declaring dependencies in a NgModule, a standalone component directly imports the modules, components, directives, or pipes it needs in its own `imports` array.

    You can bootstrap an entire application using a standalone component and configure application-level providers directly during the bootstrap process. Standalone components are the default from Angular 17 onwards and are generally the recommended approach for new development.

    Here's a minimal example:

    ```typescript
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common'; // Import necessary modules

    @Component({
      selector: 'app-standalone-example',
      standalone: true, // This makes it standalone
      imports: [CommonModule], // Import dependencies directly
      template: `
        <p>This is a standalone component!</p>
        <p *ngIf="true">Conditional content</p>
      `,
      styles: [],
    })
    export class StandaloneExampleComponent {
      // Component logic
    }
    ```

    <!-- Update here: /questions/what-is-standalone-component/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

28. ### What is a singleton service and how can it be achieved?

    <!-- Update here: /questions/what-is-singleton-service-angular/en-US.mdx -->

    A singleton service in Angular means that only a single instance of that service exists throughout the entire application. This is useful for managing global state, sharing data or logic across different components and services, or optimizing resource usage.

    The most common and recommended way to achieve a singleton service is by providing it at the root level using the `providedIn: 'root'` property in the `@Injectable()` decorator:

    ```typescript
    import { Injectable } from '@angular/core';

    @Injectable({
      providedIn: 'root', // Makes this service a singleton
    })
    export class DataService {
      private data: any;

      setData(value: any) {
        this.data = value;
      }

      getData() {
        return this.data;
      }
    }
    ```

    When `providedIn: 'root'` is used, Angular registers the service with the application's root injector. Any component or service that injects `DataService` anywhere in the application will receive the _same_ instance.

    <!-- Update here: /questions/what-is-singleton-service-angular/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

29. ### What is the dependency injection hierarchy in Angular?

    <!-- Update here: /questions/what-is-dependency-injection-hierarchy-in-angular/en-US.mdx -->

    Angular's dependency injection (DI) system works as a hierarchical tree of injectors, mirroring the component tree structure. When a component or service requests a dependency, Angular starts looking for a provider in that component's own injector. If not found, it walks up the injector tree to the parent component's injector, then its parent, and so on, until it reaches the root injector.

    The first provider found for the requested token is used to create or provide the dependency instance. This hierarchy determines the scope and lifetime of service instances:

    - Providers defined at the root level (e.g., using `@Injectable({ providedIn: 'root' })` or in the root `AppModule`) are typically singletons for the entire application.
    - Providers defined at the module level (in a lazy-loaded module's `providers` array) are singletons within that specific module's scope.
    - Providers defined at the component or directive level (in the `@Component` or `@Directive` `providers` array) create a new instance of the service for _each_ instance of that component or directive.

    This hierarchical lookup allows for both application-wide singletons and localized, component-specific service instances.

    <!-- Update here: /questions/what-is-dependency-injection-hierarchy-in-angular/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

30. ### What are signals and why is it introduced?

    <!-- Update here: /questions/what-are-signals/en-US.mdx -->

    Signals, available from Angular 16 onwards, are a new reactive primitive that provide a way to manage state changes in a more explicit and efficient manner. They are simple wrappers around values that notify interested consumers when the value changes.

    The primary reasons for introducing signals are:

    - **Simplifying change detection**: Signals enable fine-grained reactivity, allowing Angular to update only the specific parts of the UI that depend on a changed signal, rather than potentially checking the entire component tree via Zone.js.
    - **Improving performance**: By reducing the amount of work needed for change detection, signals can significantly improve application performance, especially in complex applications. They also pave the way for potential future zoneless applications.
    - **Enhancing developer experience**: Signals make reactivity more explicit and easier to reason about, providing a simpler mental model for state management compared to traditional methods.

    <!-- Update here: /questions/what-are-signals/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

31. ### Explain data bindings and the different types.

    <!-- Update here: /questions/explain-data-bindings-and-the-different-types/en-US.mdx -->

    Data binding in Angular is a mechanism that synchronizes data between the component class and the template (view). It allows you to display component data in the view and react to user input or events from the view.

    There are two main categories:

    1. **One-way binding**: Data flows in a single direction, either from the component to the view or from the view to the component.
       - **Interpolation (`{{ value }}`)**: Displays component property values as text in the template. Data flows from component to view.
       - **Property binding (`[property]="value"`)**: Sets a DOM element's property to the value of a component property. Data flows from component to view.
       - **Attribute binding (`[attr.attribute]="value"`)**: Sets an HTML attribute's value. Useful for attributes without corresponding DOM properties (like `colspan`, `aria-*`). Data flows from component to view.
       - **Event binding (`(event)="handler()"`)**: Listens for events on DOM elements (like `click`, `input`) and executes a component method. Data flows from view to component.
    2. **Two-way binding (`[(ngModel)]="value"`)**: Data flows in both directions simultaneously. Changes in the component property update the view, and changes in the view (usually via user input) update the component property. This is typically achieved using the `ngModel` directive (requires `FormsModule`).

    <!-- Update here: /questions/explain-data-bindings-and-the-different-types/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

32. ### What are template expressions and template statements?

    <!-- Update here: /questions/what-are-template-and-expressions-statements/en-US.mdx -->

    In Angular templates, you use two main types of syntax to interact with your component's data and logic: template expressions and template statements.

    - **Template expressions** are used for data binding. They evaluate to a value and are typically used to display data (`{{ user.name }}`) or bind properties (`[src]="imageUrl"`). They are read-only and cannot change the state of the application directly (e.g., no assignments like `x = 1`).
    - **Template statements** are used for event binding. They execute code in response to an event (`(click)="saveData()"`). They can call component methods or perform simple assignments.

    <!-- Update here: /questions/what-are-template-and-expressions-statements/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

33. ### What is property binding? How is it different from event binding?

    <!-- Update here: /questions/what-is-property-binding-different-from-event-binding/en-US.mdx -->

    Property binding in Angular allows you to set the value of a target element's property using a component's property value. The data flow is one-way, from the component class to the DOM element or directive property. You use square brackets `[]` around the target property name, like `[src]="imageUrl"`.

    Event binding, on the other hand, lets you listen for events dispatched by a target element (like a button click or input change) and execute a method in your component class when that event occurs. The data flow is from the DOM element to the component. You use parentheses `()` around the target event name, like `(click)="saveData()"`.

    The main difference is the direction of data flow: property binding sends data _to_ the element, while event binding receives notifications _from_ the element.

    <!-- Update here: /questions/what-is-property-binding-different-from-event-binding/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

34. ### How is data shared between components?

    <!-- Update here: /questions/how-is-data-shared-between-components/en-US.mdx -->

    Data sharing between Angular components depends on their relationship:

    - **Parent to Child:** Use the `@Input()` decorator in the child component to receive data passed from the parent's template.
    - **Child to Parent:** Use the `@Output()` decorator and `EventEmitter` in the child component to emit events (often carrying data) that the parent component listens to in its template.
    - **Sibling or Unrelated Components:** Use a shared service. The service holds the data and provides methods to update and access it. Components inject the service and interact with it. For reactive data updates, the service typically uses RxJS Observables (`Subject`, `BehaviorSubject`) or Signals (available from Angular 17+).

    <!-- Update here: /questions/how-is-data-shared-between-components/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

35. ### What are host bindings and host listeners?

    <!-- Update here: /questions/what-are-host-and-bindings-listeners/en-US.mdx -->

    Host bindings and host listeners are decorators used in Angular directives and components to interact directly with the host element, which is the element the directive or component is applied to.

    - `@HostBinding` allows you to bind a property of the host element (like `class`, `style`, `id`, `src`, etc.) to a property of your directive or component class. This is useful for dynamically changing the host element's appearance or attributes based on the component/directive's state.
    - `@HostListener` allows you to subscribe to events emitted by the host element (like `click`, `mouseover`, `keydown`, etc.) and execute a method in your directive or component class when that event occurs. This is useful for reacting to user interactions directly on the element.

    They provide a declarative way to manage interactions with the host element without needing to manually access the DOM.

    <!-- Update here: /questions/what-are-host-and-bindings-listeners/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

36. ### What is the purpose of `@Input` and `@Output` decorators?

    <!-- Update here: /questions/what-is-the-purpose-of-input-and-output-decorators/en-US.mdx -->

    `@Input` and `@Output` are decorators used in Angular for communication between parent and child components.

    - `@Input` allows a parent component to pass data _down_ to a child component. You declare a property in the child component with `@Input()` and the parent binds to it in its template.
    - `@Output` allows a child component to send data or notify the parent component about events happening _up_ to the parent. You declare a property in the child with `@Output()`, initialized as an `EventEmitter`, and the child calls `emit()` to send data. The parent listens to this output property using event binding syntax `()`.

    This pattern establishes a clear, unidirectional data flow (down) and event flow (up), making component interactions predictable and easier to manage.

    <!-- Update here: /questions/what-is-the-purpose-of-input-and-output-decorators/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

37. ### How does Angular handle forms?

    <!-- Update here: /questions/how-does-angular-handles-forms/en-US.mdx -->

    Angular handles forms primarily through two distinct approaches: Template-driven forms and Reactive forms.

    - **Template-driven forms** are simpler and suitable for basic forms. They rely heavily on directives like `ngModel` and `ngForm` directly within the template to manage form state and validation. The logic is largely handled by Angular directives in the HTML.
    - **Reactive forms** are more robust and scalable, ideal for complex forms. They build the form model programmatically in the component class using classes like `FormControl`, `FormGroup`, and `FormArray`. This approach offers better testability, predictability, and control over form data flow and validation.

    Choose Template-driven for simple forms and Reactive for more complex scenarios or when testability is a priority.

    <!-- Update here: /questions/how-does-angular-handles-forms/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

38. ### What are the differences between reactive forms and template driven forms?

    <!-- Update here: /questions/what-are-the-differences-between-reactive-forms-and-template-driven/en-US.mdx -->

    Reactive forms and template-driven forms are two different approaches in Angular for handling user input through forms.

    - **Reactive Forms:** The form model is defined explicitly in the component class using `FormGroup`, `FormControl`, and `FormArray`. Validation is also defined programmatically in the component. They are synchronous, predictable, and easier to test, making them suitable for complex, dynamic, or large-scale forms.
    - **Template-Driven Forms:** The form model is created implicitly by directives like `NgModel` and `NgForm` directly in the template. Validation is defined using template directives (e.g., `required`, `minlength`). They are asynchronous and simpler to set up for basic forms but less scalable and harder to test for complex scenarios.

    Choose reactive forms for most applications, especially when forms are complex or require dynamic behavior. Use template-driven forms for very simple forms or quick prototypes.

    <!-- Update here: /questions/what-are-the-differences-between-reactive-forms-and-template-driven/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

39. ### What is the purpose of FormBuilder?

    <!-- Update here: /questions/what-is-purpose-of-formbuilder/en-US.mdx -->

    `FormBuilder` is a service provided by Angular's `@angular/forms` module that simplifies the creation of `FormControl`, `FormGroup`, and `FormArray` instances in reactive forms. Instead of manually instantiating each control and group with `new FormControl(...)` and `new FormGroup({...})`, you inject `FormBuilder` and use its methods like `group()`, `control()`, and `array()`. This leads to cleaner, more readable code, especially for complex forms.

    For example, creating a simple form group:

    ```typescript
    // Without FormBuilder
    const myForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl('')
    });

    // With FormBuilder
    import { FormBuilder, FormGroup } from '@angular/forms';

    // In your component/service constructor
    constructor(private fb: FormBuilder) {}

    // To create the form
    const myForm = this.fb.group({
      name: [''], // Shorthand for new FormControl('')
      email: ['']
    });
    ```

    <!-- Update here: /questions/what-is-purpose-of-formbuilder/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

40. ### What are the different ways to group form controls?

    <!-- Update here: /questions/what-are-the-different-ways-to-group-form-controls/en-US.mdx -->

    In Angular reactive forms, you group form controls primarily using two classes: `FormGroup` and `FormArray`.

    - `FormGroup`: Used to group a collection of `FormControl`, `FormGroup`, or `FormArray` instances into a single object, where each child control is identified by a unique key (like properties in an object). It's suitable for fixed structures like a user's name and email.
    - `FormArray`: Used to group a collection of `FormControl`, `FormGroup`, or `FormArray` instances into an array. It's suitable for dynamic lists of controls, like a list of phone numbers or addresses, where the number of items can change.

    You typically create these using the `FormBuilder` service for convenience:

    ```typescript
    import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

    constructor(private fb: FormBuilder) {}

    myForm = this.fb.group({
      name: ['', Validators.required], // FormControl
      address: this.fb.group({ // FormGroup nested
        street: [''],
        city: ['']
      }),
      phoneNumbers: this.fb.array([ // FormArray
        this.fb.control('') // Initial FormControl in the array
      ])
    });
    ```

    In the template, you bind to these groups using `[formGroup]` and `[formArrayName]` directives.

    <!-- Update here: /questions/what-are-the-different-ways-to-group-form-controls/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

41. ### How do you create custom validators in Angular?

    <!-- Update here: /questions/how-do-you-create-custom-validators-in-angular/en-US.mdx -->

    Custom validators in Angular allow you to define specific validation rules beyond the built-in ones like `required` or `minLength`.

    You create a custom validator as a function that takes an `AbstractControl` (representing the form control, group, or array) as an argument and returns either:

    - `null` if the control's value is valid
    - A `ValidationErrors` object (e.g., `{ 'myError': true }`) if the value is invalid

    There are two types:

    - **Synchronous validators:** Return `ValidationErrors | null` immediately.
    - **Asynchronous validators:** Return `Promise<ValidationErrors | null>` or `Observable<ValidationErrors | null>`. These are used for validations that require time, like checking against a server API.

    In **Reactive Forms**, you pass these validator functions directly when creating `FormControl`, `FormGroup`, or `FormArray` instances. Synchronous validators go in the second argument array, and asynchronous validators go in the third argument array.

    ```typescript
    // Sync validator example
    function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? { forbiddenName: { value: control.value } } : null;
      };
    }

    // Applying in Reactive Forms
    this.myForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        forbiddenNameValidator(/admin/i),
      ]), // Sync validators
      email: new FormControl('', [], [this.emailExistsValidator]), // Async validators
    });
    ```

    In **Template-Driven Forms**, you typically create a directive that implements the `Validator` or `AsyncValidator` interface and registers itself with the `NG_VALIDATORS` or `NG_ASYNC_VALIDATORS` provider token.

    <!-- Update here: /questions/how-do-you-create-custom-validators-in-angular/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

42. ### What is Angular Routing and how do you set it up?

    <!-- Update here: /questions/what-is-angular-routing-and-how-do-you-set-it-setup/en-US.mdx -->

    Angular Routing is a mechanism that allows you to navigate between different views or components in your single-page application (SPA) without requiring a full page reload. It maps URL paths to specific components, enabling features like deep linking, browser history navigation, and organized application structure.

    To set it up:

    1. **Include the Router Module**: When creating a new project with the Angular CLI, you can add routing automatically. For an existing project, import `RouterModule` from `@angular/router` into your main application module (usually `AppModule`).
    2. **Define Routes**: Create an array of `Route` objects, typically in a separate file like `app-routing.module.ts`. Each route object specifies a `path` (the URL segment) and the `component` to display when that path is active.

       ```typescript
       import { Routes, RouterModule } from '@angular/router';
       import { HomeComponent } from './home/home.component';
       import { AboutComponent } from './about/about.component';

       const routes: Routes = [
         { path: '', component: HomeComponent }, // Default route
         { path: 'about', component: AboutComponent },
         { path: '**', redirectTo: '' }, // Wildcard route for unmatched paths
       ];
       ```

    3. **Configure the Root Module**: Import the `routes` array and use `RouterModule.forRoot(routes)` in the `imports` array of your main application module (`AppModule`). Feature modules use `RouterModule.forChild(routes)`.
    4. **Add the Router Outlet**: Place the `<router-outlet></router-outlet>` directive in your main application template (usually `app.component.html`). This is where Angular will render the component corresponding to the current route.
    5. **Create Navigation Links**: Use the `routerLink` directive on anchor tags (`<a>`) instead of `href` to create navigation links.
       ```html
       <a routerLink="/">Home</a> <a routerLink="/about">About</a>
       ```

    This setup allows Angular to intercept browser navigation, match the URL to a defined route, and display the associated component in the router outlet.

    <!-- Update here: /questions/what-is-angular-routing-and-how-do-you-set-it-setup/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

43. ### What are router links and how are they used?

    <!-- Update here: /questions/what-are-router-links-and-how-are-they-used/en-US.mdx -->

    Router links, provided by the `routerLink` directive in Angular, are the primary way to enable navigation between different routes within your application using declarative syntax in your templates. Instead of using the standard HTML `href` attribute, which causes a full page reload, `routerLink` leverages Angular's Router to perform client-side navigation.

    You typically apply `routerLink` to an anchor (`<a>`) tag, but it can be used on any element.

    Here are common ways to use it:

    - **Static path:**
      ```html
      <a routerLink="/dashboard">Go to Dashboard</a>
      ```
    - **Path with parameters:** Use an array syntax.
      ```html
      <a [routerLink]="['/products', productId]">View Product</a>
      ```
    - **Path with query parameters and fragment:**
      ```html
      <a
        [routerLink]="['/search']"
        [queryParams]="{ category: 'electronics' }"
        fragment="results"
        >Search Electronics</a
      >
      ```

    Using `routerLink` ensures that Angular's routing mechanism handles the navigation, allowing for features like route guards, resolvers, and smooth transitions without a full page refresh.

    <!-- Update here: /questions/what-are-router-links-and-how-are-they-used/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

44. ### How do you pass parameters in Angular routes?

    <!-- Update here: /questions/how-do-you-pass-parameters-in-angular-routes/en-US.mdx -->

    You can pass parameters in Angular routes primarily in two ways:

    1. **Route Parameters**: These are part of the URL path itself, typically used to identify a specific resource. You define them in the route configuration using a colon (`:`), like `path: 'items/:id'`. To navigate, you pass them as segments in the `router.navigate` array, for example, `this.router.navigate(['/items', itemId])`. In the target component, you read them using the `ActivatedRoute` service, accessing `this.route.snapshot.paramMap.get('id')` for the initial load or subscribing to `this.route.paramMap` for changes.
    2. **Query Parameters**: These are appended to the URL after a question mark (`?`), used for optional values like filtering, sorting, or pagination. They are not defined in the route path. To navigate, you pass them in the `queryParams` object of the `router.navigate` options, like `this.router.navigate(['/items'], { queryParams: { category: 'electronics' } })`. In the target component, you read them using `ActivatedRoute`, accessing `this.route.snapshot.queryParamMap.get('category')` or subscribing to `this.route.queryParamMap`.

    <!-- Update here: /questions/how-do-you-pass-parameters-in-angular-routes/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

45. ### What is the wild card route?

    <!-- Update here: /questions/what-is-wildcard-route/en-US.mdx -->

    The wildcard route in Angular, represented by the path `**`, is a special route that the Angular router uses as a fallback. It matches any URL that doesn't match any of the previously defined routes in your application's routing configuration. Its primary purpose is to handle unknown or invalid URLs, typically by redirecting the user to a 404 "Page Not Found" page or sometimes back to the application's home page. It must always be the _last_ route defined in your `routes` array so that the router checks all specific routes first before falling back to the wildcard.

    ```typescript
    import { Routes } from '@angular/router';
    import { HomeComponent } from './home/home.component';
    import { AboutComponent } from './about/about.component';
    import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

    const routes: Routes = [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      // Wildcard route must be last
      { path: '**', component: PageNotFoundComponent },
    ];
    ```

    <!-- Update here: /questions/what-is-wildcard-route/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

46. ### What is a router outlet?

    <!-- Update here: /questions/what-is-router-outlet/en-US.mdx -->

    A `RouterOutlet` is a directive provided by Angular's router module. It acts as a placeholder in your application's template where the router should display the component corresponding to the current route. When the URL changes and matches a configured route, the router dynamically loads the associated component and renders it inside the `<router-outlet>` tag. Think of it as a dynamic slot in your layout that gets filled with different components depending on the navigation state.

    <!-- Update here: /questions/what-is-router-outlet/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

47. ### What is the router state?

    <!-- Update here: /questions/what-is-router-state/en-US.mdx -->

    The router state in Angular is a snapshot of the router's tree of activated routes at a specific point in time. It represents the current state of the application's navigation.

    Each node in this tree is an `ActivatedRoute` instance, which holds information about a segment of the URL associated with a loaded component. This information includes:

    - Route parameters (`params`)
    - Query parameters (`queryParams`)
    - Static and resolved data (`data`)
    - The URL segments (`url`)
    - The URL fragment (`fragment`)
    - References to parent and child routes (`parent`, `children`)

    You typically access the router state by injecting the `ActivatedRoute` service into a component to get information about the route that activated _that specific component_. You can also access the entire state tree via the `routerState` property of the `Router` service.

    It's crucial for tasks like fetching data based on route parameters, displaying content conditionally, or understanding the current navigation context.

    <!-- Update here: /questions/what-is-router-state/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

48. ### What are Angular Guards and how are they used?

    <!-- Update here: /questions/what-are-angular-guards-and-how-are-they-used/en-US.mdx -->

    Angular Guards are services that implement specific interfaces to control navigation within your application. They are used to protect routes by deciding if a user can activate a route (`CanActivate`), activate a child route (`CanActivateChild`), deactivate a route (`CanDeactivate`), load a lazy-loaded module (`CanLoad`), or match a route definition (`CanMatch`). They can also be used to pre-fetch data before a route is activated (`Resolve`).

    Guards are typically implemented as injectable services or, from Angular 14 onwards, as functions. They return a boolean (`true` to allow, `false` to deny) or a `UrlTree` (to redirect), or an `Observable` or `Promise` that resolves to one of these types.

    You apply guards to routes in your routing configuration using properties like `canActivate`, `canActivateChild`, `canDeactivate`, `canLoad`, `canMatch`, or `resolve`.

    For example, a simple `CanActivate` guard using the functional syntax (Angular 14+):

    ```typescript
    // auth.guard.ts
    import { CanActivateFn, Router } from '@angular/router';
    import { inject } from '@angular/core';
    import { AuthService } from './auth.service'; // Assume you have an auth service

    export const authGuard: CanActivateFn = (route, state) => {
      const authService = inject(AuthService);
      const router = inject(Router);

      if (authService.isAuthenticated()) {
        return true; // Allow navigation
      } else {
        // Redirect to login page
        return router.createUrlTree(['/login']);
      }
    };

    // app-routing.module.ts
    import { Routes } from '@angular/router';
    import { DashboardComponent } from './dashboard/dashboard.component';
    import { authGuard } from './auth.guard';

    const routes: Routes = [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard], // Apply the guard here
      },
      // ... other routes
    ];
    ```

    <!-- Update here: /questions/what-are-angular-guards-and-how-are-they-used/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

49. ### What is the purpose of the async pipe in Angular templates?

    <!-- Update here: /questions/what-is-the-purpose-of-async-pipe-in-angular-templates/en-US.mdx -->

    The `async` pipe in Angular templates is used to automatically subscribe to an `Observable` or `Promise` and unwrap the value they emit. When a new value is emitted, the pipe triggers change detection to update the view.

    Its main purposes are:

    - Simplifying template code by removing the need for manual subscription and variable updates in the component class
    - Preventing memory leaks by automatically unsubscribing from the `Observable` when the component is destroyed
    - Handling the asynchronous nature of data streams gracefully in the template

    You use it directly in the template like this:

    ```html
    <div>{{ data$ | async }}</div>
    ```

    where `data

    <!-- Update here: /questions/what-is-the-purpose-of-async-pipe-in-angular-templates/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

50. ### What is the difference between pure and impure pipe?

    <!-- Update here: /questions/difference-between-pure-and-impure-pipe/en-US.mdx -->

    In Angular, pipes transform data in templates. By default, pipes are **pure**.

    - **Pure pipes** are memoized. They only re-run their `transform` method when their input value changes (for primitives like strings, numbers, booleans) or when the input object _reference_ changes (for objects like arrays, objects, dates). They are efficient because they avoid unnecessary recalculations.
    - **Impure pipes** are _not_ memoized. They re-run their `transform` method during _every_ change detection cycle, regardless of whether the input value or reference has changed. This can be less performant but is necessary for transformations that depend on mutable data structures (like filtering or sorting an array in place) or asynchronous operations (like the `async` pipe).

    You make a pipe impure by setting `pure: false` in the `@Pipe` decorator:

    ```typescript
    @Pipe({
      name: 'myImpurePipe',
      pure: false, // Makes the pipe impure
    })
    export class MyImpurePipe implements PipeTransform {
      transform(value: any, ...args: any[]): any {
        // Transformation logic
        return transformedValue;
      }
    }
    ```

    Use pure pipes whenever possible for better performance. Use impure pipes only when the transformation logic requires checking for changes _within_ objects or relies on external state/asynchronous updates.

    <!-- Update here: /questions/difference-between-pure-and-impure-pipe/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

51. ### How do you write a custom pipe?

    <!-- Update here: /questions/how-do-you-write-custom-pipe/en-US.mdx -->

    A custom pipe in Angular allows you to transform data within your templates. To create one, you typically use the Angular CLI command `ng generate pipe <pipe-name>`. This creates a class decorated with `@Pipe`, which requires a `name` property used in templates. The class must implement the `PipeTransform` interface, which mandates a `transform` method. This method takes the input `value` and optional `args` and returns the transformed output.

    ```typescript
    import { Pipe, PipeTransform } from '@angular/core';

    @Pipe({
      name: 'myCustomPipe', // Used in templates like {{ data | myCustomPipe }}
    })
    export class MyCustomPipe implements PipeTransform {
      transform(value: any, ...args: any[]): any {
        // Your transformation logic here
        return transformedValue;
      }
    }
    ```

    Once created, you use it in your template like `{{ data | myCustomPipe:arg1:arg2 }}`.

    <!-- Update here: /questions/how-do-you-write-custom-pipe/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

52. ### Explain different types of compilation Angular provides and why is the need for it.

    <!-- Update here: /questions/explain-different-types-of-compilation-in-angular/en-US.mdx -->

    Angular needs to compile your application's code, which includes TypeScript and HTML templates, into efficient JavaScript that browsers can understand and execute. There are two main types of compilation:

    - **Just-in-Time (JIT) compilation:** This happens in the browser at runtime. The Angular compiler is included in the application bundle, and it compiles the application code just before it runs. This is typically used during development (`ng serve`) because it allows for faster rebuilds.
    - **Ahead-of-Time (AOT) compilation:** This happens during the build process, before the browser loads the application. The Angular compiler runs on your machine, converting your templates and components into highly optimized JavaScript. The browser then downloads and runs the pre-compiled code. This is the default and recommended approach for production builds (`ng build --configuration production`) because it results in smaller bundles, faster startup times, and catches template errors earlier.

    AOT is preferred for production due to its performance benefits and early error detection.

    <!-- Update here: /questions/explain-different-types-of-compilation-in-angular/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

53. ### What is change detection in Angular and how does it work?

    <!-- Update here: /questions/what-is-change-detection-angular/en-US.mdx -->

    Change detection in Angular is the mechanism that synchronizes the application's data model with the user interface (DOM). Angular needs this because JavaScript is dynamic, and it doesn't automatically know when data bound to the view has changed.

    By default, Angular uses Zone.js to detect asynchronous operations like browser events (clicks, input), timers (`setTimeout`), and HTTP requests. When one of these operations completes, Zone.js notifies Angular, triggering a change detection cycle.

    During a cycle, Angular traverses the component tree from top to bottom. For each component, it checks if the values of any template expressions (like `{{ data }}` or `[property]="data"`) have changed since the last check. If a change is detected, Angular updates the corresponding part of the DOM.

    You can optimize this process using the `OnPush` change detection strategy. With `OnPush`, a component is only checked when:

    - One of its input properties changes reference (not just value).
    - An event originates from the component or its children.
    - Change detection is explicitly triggered (e.g., using `ChangeDetectorRef`).
    - An observable bound with the `async` pipe emits a new value.

    Available from Angular 16 onwards, Signals offer a more granular approach to change detection, allowing specific parts of the UI to update only when the signals they depend on change, potentially reducing the need for full tree checks and Zone.js in the future.

    <!-- Update here: /questions/what-is-change-detection-angular/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

54. ### How do you manually trigger change detection?

    <!-- Update here: /questions/how-do-you-manually-trigger-change-detection/en-US.mdx -->

    You might need to manually trigger change detection in Angular, especially when using the `OnPush` change detection strategy or when working outside of Angular's default Zone.js environment (like with Web Workers or certain third-party libraries).

    The primary ways to manually trigger change detection are:

    - `ChangeDetectorRef.detectChanges()`: Runs change detection for the current component and its descendants. Use this when you know a change has occurred within the component's view or its children that Angular might not otherwise detect, especially after detaching a component

    - `ChangeDetectorRef.markForCheck()`: Marks the component and its ancestors as needing to be checked during the _next_ change detection cycle. It doesn't trigger the check immediately. This is the preferred method when using `OnPush`, as it efficiently signals Angular that a relevant input or observable has emitted, ensuring the component is checked during the next global tick

    - `ApplicationRef.tick()`: Triggers change detection for the _entire_ application. This is less common for component-specific updates and more for global scenarios or testing

    ```typescript
    import {
      Component,
      ChangeDetectorRef,
      ChangeDetectionStrategy,
      ApplicationRef,
      signal, // Available from Angular 16 onwards
    } from '@angular/core';

    @Component({
      selector: 'app-my-component',
      template: `
        <p>{{ message() }}</p>
        <button (click)="updateMessage()">Update Message (Manual CD)</button>
      `,
      // Often used with OnPush strategy
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true, // Example with standalone component
    })
    export class MyComponent {
      // Using Signals for reactivity (Available from Angular 16 onwards)
      message = signal('Initial message');

      constructor(
        private cdr: ChangeDetectorRef,
        private appRef: ApplicationRef
      ) {}

      updateMessage() {
        // Update the signal. With OnPush, if `message` was a regular property,
        // we'd need manual CD. With Signals, it often handles itself, but manual CD
        // might still be useful for edge cases or non-signal changes.
        this.message.set(
          'Message updated at ' + new Date().toLocaleTimeString()
        );

        // Choose one method depending on the scenario:

        // Method 1: Trigger change detection for this component and its children
        // Useful if the component's change detector was detached or for immediate updates.
        // this.cdr.detectChanges();

        // Method 2: Mark this component and ancestors for check (common with OnPush)
        // This is usually sufficient and more performant than detectChanges() when using OnPush.
        // This example uses a signal, which will automatically mark the component dirty when read in template.
        // However, if `message` was a regular property, `markForCheck()` would be crucial.
        this.cdr.markForCheck();

        // Method 3: Trigger change detection for the entire application
        // this.appRef.tick();
      }
    }
    ```

    <!-- Update here: /questions/how-do-you-manually-trigger-change-detection/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

55. ### What is `zone.js` and NgZone?

    <!-- Update here: /questions/what-is-zonejs-and-ngzone/en-US.mdx -->

    `zone.js` is a library that patches asynchronous browser APIs like `setTimeout`, `addEventListener`, and `Promise` to create execution contexts called "zones". It allows tracking when asynchronous operations start and finish.

    Angular uses `zone.js` to automatically detect when potential changes might have occurred in your application's data. When an asynchronous event tracked by `zone.js` completes (like a button click, an HTTP response, or a timer firing), `zone.js` notifies Angular, which then triggers its change detection mechanism to update the UI if necessary.

    `NgZone` is an injectable Angular service that wraps `zone.js`. It provides methods to explicitly run code _inside_ Angular's zone (`run()`) or _outside_ Angular's zone (`runOutsideAngular()`). Running code outside the zone is useful for performance-sensitive tasks like frequent DOM manipulations or animations, as it prevents Angular's change detection from running unnecessarily after every microtask or event within that code block.

    <!-- Update here: /questions/what-is-zonejs-and-ngzone/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

56. ### What is a zoneless Angular application and why is this mode significant?

    <!-- Update here: /questions/what-is-zoneless-angular-app/en-US.mdx -->

    A zoneless Angular application is one configured to run without `zone.js`, the library that traditionally monkey-patches browser async APIs (like `setTimeout`, `addEventListener`, `fetch`) to automatically notify Angular when something _might_ have changed, triggering change detection.

    The significance of zoneless mode lies in moving away from this automatic, potentially over-eager change detection mechanism. Instead, change detection is triggered explicitly by the developer (e.g., using `ChangeDetectorRef.markForCheck()`) or, more importantly, reactively by Angular's new Signals primitive.

    This approach offers several benefits:

    - **Improved Performance:** Change detection runs only when truly necessary, reducing unnecessary checks and improving application speed.
    - **Reduced Bundle Size:** The `zone.js` library is removed from the application bundle.
    - **Easier Debugging:** Stack traces are cleaner without the zone frames.
    - **Better Interoperability:** Fewer potential conflicts with third-party libraries that also interact with global async APIs.
    - **Enables Signals:** Zoneless mode is the natural environment for Signals, providing fine-grained, reactive updates without relying on broad zone notifications.

    Available from Angular 16 onwards as a developer preview, and becoming more stable and recommended with subsequent versions like Angular 17+.

    <!-- Update here: /questions/what-is-zoneless-angular-app/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

57. ### What is Angular Ivy and what advantages does it provide for compilation and rendering?

    <!-- Update here: /questions/what-is-angular-ivy-advantages/en-US.mdx -->

    Angular Ivy is the default compilation and rendering pipeline for Angular applications, introduced as the default in Angular 9. It's a complete rewrite designed to improve build times, reduce bundle sizes, and enhance runtime performance.

    Key advantages include:

    - **Locality:** Ivy compiles components independently, leading to significantly faster build times, especially during development.
    - **Tree-shaking:** The generated code is highly tree-shakable, meaning unused parts of the Angular framework can be removed from the final bundle, resulting in smaller application sizes.
    - **Smaller bundles:** Due to better tree-shaking and a more efficient runtime, applications built with Ivy are generally smaller.
    - **Faster rendering:** A smaller runtime and more efficient generated code can lead to faster initial loading and rendering of the application.
    - **Improved debugging:** Provides better stack traces and debugging capabilities.

    <!-- Update here: /questions/what-is-angular-ivy-advantages/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

58. ### Explain how to use `HttpClient` with an example?

    <!-- Update here: /questions/how-to-use-httpclient-example/en-US.mdx -->

    The Angular HttpClient is used to make HTTP requests to backend servers. First, import `HttpClientModule` in your `app.config.ts` or `app.module.ts` (depending on whether you're using standalone components or modules). Then, inject `HttpClient` into your component or service. Use methods like `get()`, `post()`, `put()`, `delete()` to make requests. Subscribe to the returned `Observable` to handle the response.

    ```typescript
    import { HttpClient } from '@angular/common/http';
    import { Injectable } from '@angular/core';

    @Injectable({
      providedIn: 'root',
    })
    export class DataService {
      private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

      constructor(private http: HttpClient) {}

      getData() {
        return this.http.get(this.apiUrl);
      }
    }
    ```

    ```typescript
    import { Component, OnInit } from '@angular/core';
    import { DataService } from './data.service';

    @Component({
      selector: 'app-my-component',
      template: `
        <ul>
          <li *ngFor="let item of data">{{ item.title }}</li>
        </ul>
      `,
      standalone: true, // Assuming standalone for modern Angular context
      providers: [DataService], // Provide the service if component is standalone
    })
    export class MyComponent implements OnInit {
      data: any[] = [];

      constructor(private dataService: DataService) {}

      ngOnInit() {
        this.dataService.getData().subscribe(
          (response: any) => {
            this.data = response;
          },
          error => {
            console.error('Error fetching data:', error);
          }
        );
      }
    }
    ```

    <!-- Update here: /questions/how-to-use-httpclient-example/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

59. ### What is an observable and how is it used?

    <!-- Update here: /questions/what-is-observable-how-used/en-US.mdx -->

    An Observable represents a stream of data or events over time. It's a core concept in reactive programming and is used extensively in Angular for handling asynchronous operations like HTTP requests, user input events, and routing changes.

    Think of it as a producer that pushes multiple values to consumers (called Observers) over time. You subscribe to an Observable to start receiving these values.

    Key characteristics:

    - **Lazy:** Nothing happens until you subscribe
    - **Asynchronous:** Designed for operations that complete over time
    - **Multiple values:** Can emit zero, one, or many values
    - **Cancellable:** Subscriptions can be easily cancelled
    - **Composable:** Can be transformed and combined using operators

    In Angular, you'll commonly subscribe to Observables returned by the `HttpClient` for API calls, or Observables representing form value changes or router events. It's crucial to unsubscribe when the component is destroyed to prevent memory leaks, although the `async` pipe handles this automatically in templates.

    <!-- Update here: /questions/what-is-observable-how-used/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

60. ### What is the difference between Promise and Observable?

    <!-- Update here: /questions/what-is-the-difference-between-promise-and-observable/en-US.mdx -->

    Promises and Observables are both used for handling asynchronous operations in JavaScript and Angular, but they differ in several key ways:

    - **Value Emission:** A Promise emits a single value (either a resolved value or an error) and then completes. An Observable can emit _multiple_ values over time (a stream of data) and can also complete or error.
    - **Execution:** Promises are _eager_. The asynchronous operation starts as soon as the Promise is created. Observables are _lazy_. The operation doesn't start until you `subscribe()` to it.
    - **Cancellability:** Promises are _not cancellable_. Once the operation starts, you cannot stop it. Observables _are cancellable_. You can stop the operation at any time by calling `unsubscribe()`.
    - **Operators:** Promises have limited built-in methods (`.then()`, `.catch()`, `.finally()`). Observables come with a rich set of operators (from RxJS) for transforming, filtering, and combining data streams (like `map`, `filter`, `debounceTime`).
    - **Error Handling:** Promises handle errors with a single `.catch()` block. Observables handle errors within the stream using operators like `catchError`, allowing for more flexible error recovery or retry strategies.

    In Angular, Observables are widely used for handling asynchronous events like HTTP requests, router events, and form changes because of their ability to handle multiple values, cancellability, and powerful operators.

    <!-- Update here: /questions/what-is-the-difference-between-promise-and-observable/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

61. ### What is RxJS?

    <!-- Update here: /questions/what-is-rxjs/en-US.mdx -->

    RxJS is a library for reactive programming using Observables, making it easier to compose asynchronous or callback-based code sequences. Think of it as dealing with streams of data or events over time.

    Its core concepts are:

    - **Observables:** Represent a stream of values that can be emitted over time.
    - **Observers (or Subscribers):** Listen to an Observable and react to the values it emits, as well as error or completion notifications.
    - **Operators:** Pure functions that take an Observable as input and return a new Observable. They are used to transform, filter, or combine streams.

    Angular heavily uses RxJS for handling asynchronous operations like HTTP requests (the `HttpClient` returns Observables), routing events, form control value changes, and custom events via `EventEmitter`. It provides a powerful and consistent way to manage complex asynchronous logic in a declarative manner.

    <!-- Update here: /questions/what-is-rxjs/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

62. ### What is an RxJS Subject?

    <!-- Update here: /questions/what-is-rxjs-subject/en-US.mdx -->

    An RxJS `Subject` is a special type of Observable that acts as both an **Observer** and an **Observable**.

    - As an **Observer**, it can receive values using `next()`, `error()`, and `complete()` methods
    - As an **Observable**, you can subscribe to it using the `subscribe()` method

    The key difference from a regular Observable is that a Subject is **multicast**, meaning it shares a single execution stream among all its subscribers. A regular Observable is typically **unicast**, creating a new execution for each subscriber.

    Subjects are commonly used in Angular for:

    - Implementing event emitters
    - Sharing data or events between different parts of an application, like between components via a service
    - Creating hot Observables from cold ones

    There are also specialized Subjects like `BehaviorSubject` (emits the last value to new subscribers), `ReplaySubject` (emits a buffer of past values), and `AsyncSubject` (emits only the last value upon completion).

    ```typescript
    import { Subject } from 'rxjs';

    const subject = new Subject<string>();

    // Subscribe to the subject
    subject.subscribe({
      next: v => console.log(`Observer A: ${v}`),
    });

    subject.subscribe({
      next: v => console.log(`Observer B: ${v}`),
    });

    // Emit values to all current subscribers
    subject.next('Hello'); // Both A and B receive 'Hello'
    subject.next('World'); // Both A and B receive 'World'
    ```

    <!-- Update here: /questions/what-is-rxjs-subject/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

63. ### What is subscribe in RxJS? How do you unsubscribe?

    <!-- Update here: /questions/what-is-subscribe-in-rxjs-and-how-do-you-unsubscribe/en-US.mdx -->

    In RxJS, `subscribe` is the method used to execute an `Observable` and start receiving values. An `Observable` is like a blueprint for a stream of data, but it doesn't do anything until you `subscribe` to it.

    When you call `subscribe`, you provide an `Observer` or callback functions (`next`, `error`, `complete`) to handle the emitted values, errors, or completion notifications. The `subscribe` method returns a `Subscription` object.

    It's crucial to **unsubscribe** from subscriptions when they are no longer needed, especially in Angular components when the component is destroyed. Failing to unsubscribe can lead to memory leaks and potential errors.

    Common ways to unsubscribe in Angular include:

    - **Manual Unsubscription:** Storing the `Subscription` object and calling `subscription.unsubscribe()` in the component's `ngOnDestroy` lifecycle hook.
    - **Using the `async` pipe:** This is the recommended approach for observables used directly in templates, as it automatically handles subscription and unsubscription.
    - **Using RxJS operators:** Operators like `takeUntil`, `take`, `first`, or `takeWhile` can complete the observable stream automatically under certain conditions, effectively ending the subscription. `takeUntil` combined with a subject triggered in `ngOnDestroy` is a common pattern.

    <!-- Update here: /questions/what-is-subscribe-in-rxjs-and-how-do-you-unsubscribe/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

64. ### How do you create custom RxJS operators?

    <!-- Update here: /questions/how-create-custom-rxjs-operators/en-US.mdx -->

    Creating custom RxJS operators allows you to encapsulate common observable transformation logic for reusability and readability. A custom operator is essentially a function that takes a source observable as input and returns a new observable, typically by applying one or more existing RxJS operators using the `pipe` method.

    The most common pattern for a custom operator is a function that returns another function. The outer function can optionally take configuration arguments, and the inner function takes the source observable and returns the transformed observable.

    Here's a basic structure:

    ```typescript
    import { Observable } from 'rxjs';
    import { map } from 'rxjs/operators';

    function myCustomOperator<T>(): (
      source: Observable<T>
    ) => Observable<string> {
      return (source: Observable<T>) => {
        return source.pipe(
          // Apply existing operators here
          map(value => `Processed: ${value}`)
        );
      };
    }
    ```

    You then use it with the `pipe` method on an observable:

    ```typescript
    import { of } from 'rxjs';

    of(1, 2, 3)
      .pipe(
        myCustomOperator() // Call the factory function
      )
      .subscribe(value => console.log(value));
    // Output:
    // Processed: 1
    // Processed: 2
    // Processed: 3
    ```

    This pattern makes your code cleaner and easier to maintain by abstracting complex observable sequences into single, descriptive functions.

    <!-- Update here: /questions/how-create-custom-rxjs-operators/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

65. ### What are HTTP interceptors and how are they used?

    <!-- Update here: /questions/what-are-http-interceptors-and-how-they-are-used/en-US.mdx -->

    HTTP interceptors in Angular are services that you can use to inspect and transform HTTP requests and responses before they are sent or processed. They provide a way to handle HTTP operations globally for your application.

    You can use them for common tasks like:

    - Adding authentication tokens to outgoing requests
    - Logging requests and responses
    - Handling errors centrally
    - Caching responses
    - Modifying request or response headers

    To create one, you implement the `HttpInterceptor` interface and provide it using the `HTTP_INTERCEPTORS` injection token with `multi: true`.

    ```typescript
    import { Injectable } from '@angular/core';
    import {
      HttpInterceptor,
      HttpRequest,
      HttpHandler,
      HttpEvent,
    } from '@angular/common/http';
    import { Observable } from 'rxjs';

    @Injectable()
    export class AuthInterceptor implements HttpInterceptor {
      intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
        // Clone the request and add a header
        const authReq = req.clone({
          headers: req.headers.set('Authorization', 'Bearer my-auth-token'),
        });

        // Pass the cloned request to the next handler
        return next.handle(authReq);
      }
    }
    ```

    Then, register it in your module's providers:

    ```typescript
    import { HTTP_INTERCEPTORS } from '@angular/common/http';
    import { AuthInterceptor } from './auth.interceptor';

    // ... in your @NgModule decorator
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ];
    ```

    <!-- Update here: /questions/what-are-http-interceptors-and-how-they-are-used/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

66. ### What are some uses of interceptors and can we provide multi-interceptors?

    <!-- Update here: /questions/what-are-the-uses-of-interceptors-and-can-we-provide-multi-interceptors/en-US.mdx -->

    Angular HTTP Interceptors allow you to intercept outgoing HTTP requests and incoming HTTP responses, process them, and pass them along. They are useful for tasks like adding authentication tokens to headers, logging requests and responses, handling errors globally, or caching responses.

    You can provide multiple interceptors in your application. Angular processes them in a chain. To provide multiple interceptors, you use the `HTTP_INTERCEPTORS` injection token and set the `multi` property to `true` for each interceptor provider in your module or component's `providers` array. The order in which you list them in the `providers` array determines the order they are applied to requests and responses.

    ```typescript
    import {
      provideHttpClient,
      withInterceptorsFromDi,
    } from '@angular/common/http';
    import { HTTP_INTERCEPTORS } from '@angular/common/http';
    import { NgModule } from '@angular/core';

    import { AuthInterceptor } from './auth.interceptor';
    import { LoggingInterceptor } from './logging.interceptor';

    @NgModule({
      providers: [
        // Using provideHttpClient with interceptorsFromDi (modern approach)
        // provideHttpClient(withInterceptorsFromDi()),
        // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },

        // Or using the older module-based approach (HttpClientModule)
        // and providing interceptors directly
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoggingInterceptor,
          multi: true,
        },
      ],
    })
    export class AppModule {}
    ```

    <!-- Update here: /questions/what-are-the-uses-of-interceptors-and-can-we-provide-multi-interceptors/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

67. ### What are dynamic components and how do you create them?

    <!-- Update here: /questions/what-are-dynamic-components-how-create/en-US.mdx -->

    Dynamic components in Angular are components that are not declared in your template but are loaded and rendered programmatically at runtime. You typically use them for scenarios like creating dashboards, modal dialogs, or tabs where the specific component to display isn't known until the application is running.

    To create and load a dynamic component:

    1. Identify a location in your template where the dynamic component should be inserted. This is usually marked by an element that serves as an anchor point.
    2. In your component class, get a reference to the `ViewContainerRef` associated with that anchor point. You can inject `ViewContainerRef` and query for elements using `@ViewChild` or `@ViewChildren`.
    3. Call the `createComponent` method on the `ViewContainerRef`, passing the class of the component you want to create.

    ```typescript
    import {
      Component,
      ViewChild,
      ViewContainerRef,
      AfterViewInit,
    } from '@angular/core';
    import { DynamicComponent } from './dynamic.component'; // The component to load dynamically

    @Component({
      selector: 'app-host',
      template: '<div #dynamicContainer></div>', // Anchor point
    })
    export class HostComponent implements AfterViewInit {
      @ViewChild('dynamicContainer', { read: ViewContainerRef })
      container!: ViewContainerRef;

      ngAfterViewInit() {
        // Clear previous components if any
        this.container.clear();

        // Create the component instance
        const componentRef = this.container.createComponent(DynamicComponent);

        // Optional: Interact with the component instance
        componentRef.instance.someInput = 'Hello from host';
        componentRef.instance.someOutput.subscribe(value => {
          console.log('Output received:', value);
        });
      }
    }
    ```

    Available from Angular 13 onwards, you no longer need `ComponentFactoryResolver` or to list components in `entryComponents` for this common use case.

    <!-- Update here: /questions/what-are-dynamic-components-how-create/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

68. ### What is Renderer2 and why would you use it?

    <!-- Update here: /questions/what-is-renderer2-why-use-it/en-US.mdx -->

    `Renderer2` is an Angular service that provides an abstraction layer over the DOM manipulation API. You use it to safely interact with the DOM or other rendering environments (like server-side rendering or web workers) without directly accessing the native elements via `ElementRef.nativeElement`.

    Using `Renderer2` is preferred over direct DOM manipulation because:

    - It makes your application compatible with server-side rendering (SSR) and web workers, where the native DOM might not exist.
    - It provides a layer of security by sanitizing values when setting properties or attributes.
    - It abstracts away platform-specific details, making your code more portable.

    Common methods include `createElement`, `appendChild`, `setProperty`, `setAttribute`, `addClass`, `removeClass`, `setStyle`, and `listen`. You inject `Renderer2` into your component or directive and use it along with `ElementRef` to target specific elements.

    ```typescript
    import {
      Component,
      ElementRef,
      Renderer2,
      AfterViewInit,
    } from '@angular/core';

    @Component({
      selector: 'app-example',
      template: '<div #myDiv>Hello</div>',
    })
    export class ExampleComponent implements AfterViewInit {
      constructor(private el: ElementRef, private renderer: Renderer2) {}

      ngAfterViewInit() {
        // Safely set a style using Renderer2
        const div = this.el.nativeElement.querySelector('#myDiv');
        this.renderer.setStyle(div, 'color', 'blue');

        // Safely listen to an event
        this.renderer.listen(div, 'click', () => {
          console.log('Div clicked!');
        });
      }
    }
    ```

    <!-- Update here: /questions/what-is-renderer2-why-use-it/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

69. ### What are Angular elements?

    <!-- Update here: /questions/what-are-angular-elements/en-US.mdx -->

    Angular Elements are Angular components packaged as custom elements, which are part of the Web Components standard. This allows you to use your Angular components in any HTML environment, whether it's a plain HTML page, a different framework like React or Vue, or even another Angular application.

    They work by using the `createCustomElement` function from the `@angular/elements` package to convert an Angular component class into a standard HTML custom element class. You then register this class with the browser's `customElements.define()` API, giving it a custom tag name (like `<my-angular-element>`).

    Inputs to the Angular component become attributes on the custom element, and outputs become custom DOM events dispatched by the element. This makes your Angular components interoperable and reusable outside the typical Angular application shell.

    <!-- Update here: /questions/what-are-angular-elements/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

70. ### What are custom elements and how does it work internally?

    <!-- Update here: /questions/what-are-custom-elements-how-work/en-US.mdx -->

    Angular Custom Elements allow you to package an Angular component as a native web platform custom element. This makes it possible to use your Angular components in any HTML environment, whether it's a plain HTML page, a React app, a Vue app, or another framework, without needing the full Angular application context.

    Internally, Angular uses the `@angular/elements` package. The core mechanism involves the `createCustomElement` function, which takes an Angular component class and an injector. It returns a standard JavaScript class that extends `HTMLElement`. This generated class acts as a bridge:

    - It maps the native custom element lifecycle callbacks (like `connectedCallback`, `disconnectedCallback`) to the corresponding Angular component lifecycle hooks (`ngOnInit`, `ngOnDestroy`).
    - It handles property changes on the custom element, mapping them to Angular component inputs (`@Input`).
    - It dispatches native custom events when the Angular component emits through its outputs (`@Output`).
    - It manages the instantiation and change detection of the underlying Angular component within the custom element's DOM (often using Shadow DOM).

    You define the custom element using the standard `customElements.define()` browser API, associating a tag name with the class returned by `createCustomElement`.

    <!-- Update here: /questions/what-are-custom-elements-how-work/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

71. ### What techniques can improve performance in an Angular app?

    <!-- Update here: /questions/what-techniques-can-improve-angular-performance/en-US.mdx -->

    Improving Angular app performance involves both build-time and runtime optimizations.

    Key techniques include:

    - **Build-time:**
      - Using Ahead-of-Time (AOT) compilation, which is the default for production builds, compiles your Angular HTML and TypeScript into efficient JavaScript code during the build process
      - Building with production flags (`ng build --configuration production` or `ng build --prod` in older versions) to enable optimizations like tree shaking, minification, and dead code elimination
    - **Runtime:**
      - Implementing **lazy loading** for modules to load application parts only when they are needed, significantly reducing the initial bundle size and load time
      - Setting the **change detection strategy** to `OnPush` for components. This tells Angular to only check for changes when component inputs change, an event originates from the component or its children, or an observable the component is subscribed to emits a value (when using the `async` pipe), drastically reducing the number of checks performed
      - Using the `trackBy` function with `*ngFor` directives to help Angular efficiently update the DOM when list items change, improving rendering performance for large lists
      - Optimizing RxJS subscriptions by unsubscribing to prevent memory leaks and using appropriate operators (`debounceTime`, `distinctUntilChanged`, `takeUntil`) to control the flow of data
      - Offloading heavy computations to **web workers** to keep the main UI thread responsive
      - Implementing **virtual scrolling** for large lists to render only the items currently visible in the viewport
      - Considering **Server-Side Rendering (SSR)** or **pre-rendering** for improved initial load performance and SEO

    Profiling tools like browser developer tools and Angular DevTools are essential for identifying performance bottlenecks.

    <!-- Update here: /questions/what-techniques-can-improve-angular-performance/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

72. ### What is lazy loading and how do you use it in Angular?

    <!-- Update here: /questions/what-is-lazy-loading-in-angular/en-US.mdx -->

    Lazy loading in Angular is a technique used to load parts of your application code only when they are needed, typically when a user navigates to a specific route. Instead of loading the entire application bundle upfront, lazy loading splits the application into smaller bundles and loads them on demand.

    The primary benefit is significantly improving the application's initial load time because the browser only downloads the code required for the initial view.

    You implement lazy loading in Angular primarily through the router configuration. Instead of importing and directly referencing a module in your route definition, you use the `loadChildren` property with a dynamic import:

    ```typescript
    const routes: Routes = [
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then(m => m.AdminModule),
      },
    ];
    ```

    This tells the router to fetch and load the `AdminModule` and its associated components and services only when the user navigates to the `/admin` path.

    <!-- Update here: /questions/what-is-lazy-loading-in-angular/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

73. ### How does Angular support internationalization (i18n) of applications?

    <!-- Update here: /questions/how-does-angular-support-internationalization/en-US.mdx -->

    Angular provides built-in support for internationalization (i18n) primarily through a build-time process. You mark text and attributes in your templates and code for translation using the `i18n` attribute or the `$localize` tagged template literal.

    The Angular CLI command `ng extract-i18n` is then used to collect all these marked messages into a translation file (like XLIFF or XMB). This file is given to translators.

    Once translated, you configure your `angular.json` file or use CLI arguments (`--localize`) to tell Angular which translation files to use for specific locales. When you build or serve your application for a particular locale, Angular replaces the original messages with the translated ones, creating locale-specific versions of your application. Angular also provides pipes like `DatePipe`, `NumberPipe`, and `CurrencyPipe` that automatically format values based on the application's locale.

    <!-- Update here: /questions/how-does-angular-support-internationalization/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

74. ### What is incremental hydration?

    <!-- Update here: /questions/what-is-incremental-hydration/en-US.mdx -->

    Incremental hydration is a technique used in Angular Server-Side Rendering (SSR) applications to improve performance, specifically the Time To Interactive (TTI). Instead of hydrating the entire application's DOM and attaching event listeners all at once after the client-side JavaScript loads, incremental hydration allows Angular to hydrate and make individual components interactive incrementally. This means parts of your application become interactive sooner, leading to a faster perceived performance and a better user experience, especially on slower networks or devices. It preserves the server-rendered HTML structure and attaches behavior without re-rendering the entire page.

    <!-- Update here: /questions/what-is-incremental-hydration/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

75. ### What is TestBed and how is it used in Angular testing?

    <!-- Update here: /questions/what-is-testbed-angular-testing/en-US.mdx -->

    `TestBed` is the primary utility in Angular's `@angular/core/testing` module used to configure and create a testing module environment. It allows you to set up the necessary components, services, imports, and providers required to test a specific part of your Angular application, such as a component or a service, in isolation or with controlled dependencies.

    You typically use `TestBed` within a `beforeEach` block in your test file to:

    - Configure a testing module using `TestBed.configureTestingModule({...})`, similar to defining an `@NgModule`.
    - Create instances of components using `TestBed.createComponent(YourComponent)`.
    - Get instances of services or other injectables using `TestBed.inject(YourService)`.

    This setup ensures that the dependencies are correctly resolved and the Angular environment is ready for testing.

    <!-- Update here: /questions/what-is-testbed-angular-testing/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

76. ### What is Protractor and how is it used for end-to-end testing?

    <!-- Update here: /questions/what-is-protractor-and-how-it-is-used-in-e2e-testing/en-US.mdx -->

    Protractor was an end-to-end test framework specifically designed for Angular applications. It was built on top of WebDriverJS and ran tests against your application running in a real browser.

    Its key advantage for Angular was its ability to automatically wait for Angular-specific operations like `$digest` cycles and HTTP requests to complete before executing the next test step, making tests more reliable without manual waits. It also provided Angular-specific element locators, such as `by.model`, `by.binding`, and `by.repeater`.

    Protractor is now deprecated and is no longer the recommended E2E testing tool for Angular projects. Modern alternatives like Cypress, Playwright, and TestCafe are commonly used instead.

    <!-- Update here: /questions/what-is-protractor-and-how-it-is-used-in-e2e-testing/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

77. ### What is Component Test Harnesses?

    <!-- Update here: /questions/what-is-component-test-harnesses/en-US.mdx -->

    Component Test Harnesses, available from Angular 9 onwards as part of the Angular CDK, provide a standardized way to interact with Angular Material or CDK components within your tests. Instead of relying on fragile DOM selectors that can break when the component's internal structure changes, you use a harness object that exposes methods representing the component's public API (e.g., `click()`, `isChecked()`, `getText()`). This makes your tests more robust, readable, and maintainable by abstracting away the component's implementation details. You typically use `TestbedHarnessEnvironment` in component tests to get a loader, and then use the loader to find and interact with specific component harnesses like `MatButtonHarness` or `MatInputHarness`.

    <!-- Update here: /questions/what-is-component-test-harnesses/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

78. ### What is Angular DevTools and how can it help during development?

    <!-- Update here: /questions/what-is-angular-devtools/en-US.mdx -->

    Angular DevTools is a browser extension available for Chrome, Edge, and Firefox that provides debugging and performance profiling capabilities specifically for Angular applications. It helps developers understand the structure of their application by visualizing the component tree, inspect and modify the state of components and directives, and analyze the performance of change detection cycles to identify bottlenecks. It's an essential tool for debugging complex Angular applications and optimizing their runtime performance.

    <!-- Update here: /questions/what-is-angular-devtools/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

79. ### How do you perform error handling?

    <!-- Update here: /questions/how-perform-error-handling-angular/en-US.mdx -->

    In Angular, error handling typically involves several strategies depending on the type of error. For asynchronous operations, especially HTTP requests using Observables, you use the `catchError` operator from RxJS to intercept errors and handle them within the Observable stream. For centralized handling of HTTP errors across your application, you implement an `HttpInterceptor` where you can catch errors, log them, show notifications, or redirect users. For global runtime errors that occur outside of specific Observable streams (like template errors, lifecycle hook errors, etc.), you can provide a custom implementation of the `ErrorHandler` class to catch and report these errors application-wide. It's also crucial to provide user-friendly feedback and log errors for debugging.

    <!-- Update here: /questions/how-perform-error-handling-angular/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

80. ### What happens if you include a `<script>` tag inside a template?

    <!-- Update here: /questions/script-tag-inside-template-angular/en-US.mdx -->

    If you include a `<script>` tag directly within an Angular component's template (`.html` file), Angular's built-in security mechanisms, specifically sanitization, will prevent it from executing. Angular treats the template content as untrusted HTML by default. During the rendering process, the sanitization pipeline will detect the `<script>` tag and either remove it entirely or neutralize it, ensuring that the code inside the script does not run in the user's browser. This is a crucial security feature designed to protect your application from Cross-Site Scripting (XSS) attacks. You should implement dynamic behavior using Angular's event binding and component logic instead of inline scripts.

    <!-- Update here: /questions/script-tag-inside-template-angular/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

81. ### What is a service worker and its role in Angular?

    <!-- Update here: /questions/what-is-service-worker-role-angular/en-US.mdx -->

    A service worker is a script that your browser runs in the background, separate from the main browser thread. It acts as a programmable network proxy, intercepting network requests from your web application.

    In Angular, service workers are primarily used to turn your application into a Progressive Web App (PWA). They enable features like:

    - **Caching:** Caching application assets (like HTML, CSS, JavaScript, images) and potentially API data, allowing for faster loading on repeat visits and offline access
    - **Offline support:** Serving cached content when the network is unavailable
    - **Push notifications:** Receiving push messages from a server (though Angular's built-in service worker mainly focuses on caching)
    - **Background sync:** Deferring actions until the user has a stable connection

    Angular provides the `@angular/pwa` package and the `ng add @angular/pwa` command to easily integrate a service worker into your project, automating the setup and configuration needed for caching.

    <!-- Update here: /questions/what-is-service-worker-role-angular/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

82. ### What is State function and Style function?

    <!-- Update here: /questions/what-is-state-and-style-function/en-US.mdx -->

    In Angular animations, `state()` and `style()` are functions used to define the visual appearance of an element at specific points in an animation.

    - `state()`: This function defines a named state for an element, associating a name (like `'open'` or `'closed'`) with a specific set of CSS styles. It takes a state name (string) and a `style()` definition as arguments.
    - `style()`: This function defines a set of CSS-like properties and their values that describe the appearance of an element at a particular moment. It's used within `state()`, `transition()`, and `keyframes()` to specify styles. It takes an object literal where keys are style properties and values are their desired settings.

    Together, `state()` defines _what_ a state is named and _what_ it looks like using `style()`, while `style()` provides the actual visual description.

    ```typescript
    import {
      trigger,
      state,
      style,
      transition,
      animate,
    } from '@angular/animations';

    @Component({
      selector: 'app-my-component',
      template: `
        <button [@myAnimation]="currentState" (click)="toggleState()">
          Animate Me
        </button>
      `,
      animations: [
        trigger('myAnimation', [
          // Define states using state() and style()
          state(
            'default',
            style({
              backgroundColor: 'blue',
              transform: 'scale(1)',
            })
          ),
          state(
            'highlighted',
            style({
              backgroundColor: 'red',
              transform: 'scale(1.1)',
            })
          ),
          // Define transitions between states
          transition('default => highlighted', [animate('300ms ease-in')]),
          transition('highlighted => default', [animate('300ms ease-out')]),
        ]),
      ],
    })
    export class MyComponent {
      currentState = 'default';

      toggleState() {
        this.currentState =
          this.currentState === 'default' ? 'highlighted' : 'default';
      }
    }
    ```

    <!-- Update here: /questions/what-is-state-and-style-function/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

83. ### What is Angular Universal?

    <!-- Update here: /questions/what-is-angular-universal/en-US.mdx -->

    Angular Universal is the official Angular project that enables **server-side rendering (SSR)** for Angular applications. Instead of the browser downloading your entire Angular application and then rendering the initial view, Universal runs your Angular app on a server (typically Node.js) to generate static HTML for the initial page load.

    The main benefits are:

    - **Improved SEO:** Search engine crawlers can easily index the fully rendered HTML content
    - **Faster perceived performance:** Users see content sooner because the initial HTML is delivered directly, even before the full JavaScript bundle loads and bootstraps
    - **Better performance on low-power devices:** The heavy lifting of initial rendering is done on the server

    After the initial HTML is delivered and displayed, the browser downloads the full Angular application, and it "bootstraps" over the server-rendered HTML, turning the static page into a fully interactive single-page application (SPA). This process is called **hydration** (available from Angular 16 onwards).

    <!-- Update here: /questions/what-is-angular-universal/en-US.mdx -->

    <br>

    > Try out [Angular coding questions](https://www.greatfrontend.com/questions/angular-interview-questions) on [GreatFrontEnd](https://www.greatfrontend.com/).

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

<!-- QUESTIONS:END -->
