# MiniShop QA Automation

This project contains automated end-to-end tests for the MiniShop web application using Playwright.

## Tech Stack

- Playwright 1.63.0
- JavaScript
- Node.js v24.18.0
- npm 11.16.0
- Chromium
- http-server

## Project Structure

```text
MiniShop-QA/
├── automation/
│   ├── pages/
│   │   ├── LoginPage.js
│   │   ├── ShopPage.js
│   │   └── ConfirmationPage.js
│   ├── tests/
│   │   ├── login.spec.js
│   │   ├── lockout.spec.js
│   │   └── checkout.spec.js
│   ├── package.json
│   └── playwright.config.js
├── mini-shop.html
├── .gitignore
└── README.md
```

## Automated Test Scenarios

The automation covers the following MiniShop scenarios:

1. Successful login using valid credentials.
2. Invalid login displays the correct error message.
3. Account is locked after three consecutive failed login attempts.
4. Correct credentials cannot be used after the account has been locked.
5. User can add a product to the cart.
6. Cart count updates after adding a product.
7. User can complete checkout.
8. Checkout confirmation displays the correct item count and total.
9. Cart count resets after checkout.

## Setup

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the automation folder:

```bash
cd MiniShop-QA/automation
```

Install dependencies:

```bash
npm install
```

Install the Chromium browser for Playwright:

```bash
npx playwright install chromium
```

## Running the Tests

Run all automated tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

View the Playwright HTML report:

```bash
npx playwright show-report
```

## Test Architecture

The project uses the Page Object Model (POM) to separate page selectors and reusable page actions from the test scenarios.

Page objects are stored in the `pages` directory, while test specifications are stored in the `tests` directory.

## Local Application

The MiniShop application is provided as `mini-shop.html`.

The Playwright configuration starts a local static HTTP server and the tests access the application through the configured `baseURL`.

This avoids hardcoding the full application URL inside individual tests.

## Assumptions

- The MiniShop application is tested as provided without modifying its application logic.
- The supplied valid credentials are used for successful login scenarios.
- Each Playwright test runs in an isolated browser context.
- Chromium is the browser used for this automation exercise.
- Product names, prices, messages, and expected behavior are based on the supplied MiniShop requirements.

## Test Results

All required automated scenarios are passing successfully.

Current result:

```text
4 passed
```