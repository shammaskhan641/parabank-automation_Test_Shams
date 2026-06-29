
# ParaBank Automation Assignment

## Project Overview

This project automates the user registration flow for the ParaBank demo application using **Playwright** with the **Page Object Model (POM)** design pattern.

The automated workflow performs the following actions:

* Launches the ParaBank application
* Registers a new user using a dynamically generated username
* Navigates to the Accounts Overview page
* Verifies the account balance
* Prints the account balance to the console

---

## Technology Stack

* Playwright
* TypeScript
* Page Object Model (POM)
* BDD Scenario documented using Gherkin

---

## Project Structure

```
pages/
    ParaBankPage.ts

tests/
    registration.spec.ts

features/
    registration.feature
```

---

## Prerequisites

* Node.js
* Visual Studio Code
* Playwright

---

## Installation

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Execute Tests

```bash
npx playwright test tests/registration.spec.ts --headed
```

Generate HTML Report:

```bash
npx playwright show-report
```

---

## Design Pattern

The project follows the **Page Object Model (POM)** design pattern by separating page actions from the test implementation.

BDD scenarios are documented using Gherkin in the `features` folder.

---

## Author

Shammas Khan
