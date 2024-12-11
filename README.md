# Automated E-Commerce Checkout Flow

This project automates the checkout process on the [Sauce Demo](https://www.saucedemo.com/) website using WebdriverIO, Cucumber, Page Object Model (POM), and Mochawesome for reporting.

## Requirements

Before getting started, make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (latest LTS version recommended)
- [Git](https://git-scm.com/) for cloning the repository

## Cloning the Repository

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```
2. Navigate to the project directory:
    ```bash
    cd your-repository
    ```

## Installing Dependencies

1. Ensure that [Node.js](https://nodejs.org/) is installed on your machine.
2. Install the project dependencies using npm:
    ```bash
    npm install
    ```

## Running Tests

1. After installing the dependencies and setting up the configuration, you can run the tests with the following command:
    ```bash
    npm run test
    ```

2. The tests will run using the Cucumber framework, and results will be displayed in the console.


## Code Structure

1. **`features/**/*.feature`** — the test scenario written in Gherkin syntax.
2. **`step-definitions/**/*.steps.js`** — the step definitions that define the behavior of the test (e.g., login, adding products to the cart, checkout process).
3. **`pages`** — page models implementing the Page Object Model (POM), which encapsulate the interactions with the page elements.
4. **`wdio.conf.js`** — WebdriverIO configuration file where the test parameters and reporting settings are specified.
