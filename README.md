# Converting Angular CLI generated project to Mocha/Chai
## package.json
### - Remove Jasmine
    `yarn remove jasmine-core jasmine-spec-reporter karma-jasmine karma-jasmine-html-reporter @types/jasmine`
### - Add Mocha Chai
    `yarn add --dev mocha chai @types/mocha @types/chai karma-chai karma-mocha karma-mocha-reporter @types/chai-as-promised`
   
### - Upgrade dependencies
    `yarn upgrade`

## protracter.conf.js
- remove: `const { SpecReporter } = require('jasmine-spec-reporter');`

- change: `framework: 'jasmine'` --> `framework: 'mocha'`

- change: `jasmineNodeOpts` -->

    ```javascript 
    mochaOpts: {
     reporter: "spec",
     slow: 3000,
     ui: 'bdd',
     timeout: 30000
    },
    ```
    
- change: `onPrepare` -->

    ```javascript 
    onPrepare: function() {
        var chai = require('chai');
        var chaiAsPromised = require('chaiAsPromised');
        chai.use(chaiAsPromised);
        global.chai = chai;
    }
    ```

## karma.conf.js
- change: `frameworks: []` --> 

    ```javascript
    frameworks: ['mocha', 'chai', '@angular/cli'],
    ```

- remove from `plugins:`
    ```javascript
    require('karma-jasmine'),
    require('karma-jasmine-html-reporter'),
    ```

- add to `plugins:`
    ```javascript
    require('karma-mocha'),
    require('karma-chai'),
    require('karma-mocha-reporter'),
    ```

- add to `files:`
    ```javascript
    { pattern: 'node_modules/chai/chai.js', instrument: false },
    ```
 
 - add `", 'json'"` to `reports:` in `coverageIstanbulReporter:`
    ```javascript
    reports: [ 'html', 'lcovonly', 'json' ],
    ```

 - change: `angularCli: reporters: `
    ```javascript
    : ['progress', 'kjhtml'],
    ```
    -->
     ```javascript
    : ['progress', 'mocha'],
    ```

## e2e/tsconfig.e2e.json
- remove: from `types:`
    ```javascript
    "jasmine",
    ```

- add: to `types:`
    ```javascript
    "mocha",
    "chai",
    ```

## e2e/app.e2e-spec.ts
- add:
    ```javascript
    const expect = global['chai'].expect;
    ```

## src/tsconfig.spec.json
- remove: from `types:`
    ```javascript
    "jasmine",
    ```

- add: to `types:`
    ```javascript
    "mocha",
    ```

## src/test.ts
 - change: `imports`
    ```javascript
    import 'zone.js/dist/jasmine-patch';
    ```
    -->
     ```javascript
    import 'zone.js/dist/mocha-patch';
    ```

## src/app/app.component.spec.ts
- add:
    ```javascript
    import { expect } from 'chai';
    ```

- change: jasmine syntax to chai so tests will actually run


# NgcliMochaChai

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
