# Museum Gallery

## Libraries/Frameworks used

-  React, TypeScript, Material UI, Jest, React Testing Library.

## Design decisions

-  **Code Organisation** : The `components` directory contains all the reusable artifacts. The `hooks` contains all the custom hooks used. The `pages` directory contain the navigable pages in the UI.
-  **Testing** : The usecases are covered with integration testing using React testing library. The components have unit tests using Jest.
-  **Component library** : Components and Grid system of [material-ui](https://material-ui.com/) is used.
-  **Component styling** : CSS-in-JS solution of material-ui is used.
-  **Linting & Formatting** : The default ESLint is used. Prettier for code formatting. husky and lint-staged are used as auxiliary library.

## To run locally

-  Inside the directory, run `npm install` to install the frontend dependencies.
-  Start the frontend dev server using `npm start`.
-  To run tests run `npm test`. This launches the test runner in the interactive watch mode.

## Test cases snapshot

![Snapshot of testcases](/docs/testcases.PNG)

Thanks for your time :)
