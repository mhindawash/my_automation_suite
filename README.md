# Cypress End-to-End Automation

![Cypress Logo](https://www.cypress.io/images/layouts/navbar-brand.svg)

This repository contains an end-to-end automation suite built with Cypress for testing the Cypress website. It showcases my Cypress skills and demonstrates how Cypress can be used to write reliable and efficient automated tests.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Tests](#running-the-tests)
- [Project Structure](#project-structure)
- [Custom Commands and Utilities](#custom-commands-and-utilities)
- [CI/CD Integration](#cicd-integration)
- [Reporting](#reporting)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Cypress End-to-End Automation suite is designed to test the functionality, responsiveness, and usability of the [Cypress website](https://www.cypress.io/). It covers a variety of scenarios and features commonly found on the website to ensure a robust and reliable testing solution.

Cypress is a powerful JavaScript-based end-to-end testing framework that provides an intuitive and developer-friendly approach to automation. It allows you to write tests in a simple and expressive manner, making it easier to build and maintain automated test suites.

## Features

The automation suite includes tests for the following features of the Cypress website:

- Navigation: Tests the navigation links and verifies that the pages load correctly.
- Search Functionality: Tests the search feature and validates search results.
- Documentation: Verifies the availability and correctness of the documentation pages.
- Downloads: Tests the download links and ensures that the downloads are working.
- Community: Validates various community-related features, such as forums and GitHub links.

These features serve as examples to demonstrate the capabilities of Cypress and provide a foundation for expanding the test suite further.

## Prerequisites

To run the tests locally, ensure that the following prerequisites are installed on your machine:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [Cypress](https://www.cypress.io/) (version 8 or higher)

## Installation

1. Clone this repository to your local machine or download the source code.
2. Open a terminal and navigate to the project's root directory.
3. Run the following command to install the dependencies:

```bash
npm install
```

## Running the Tests

To run the automation suite locally, follow these steps:

1. Ensure that the Cypress website is accessible and running.
2. Open a terminal and navigate to the project's root directory.
3. Run the following command to open the Cypress Test Runner:

```bash
npm run cypress:open
```

4. Click on a test file in the Cypress Test Runner to execute the tests in an interactive mode.
5. Alternatively, to run the tests in headless mode, use the following command:

```bash
npm run cypress:run
```

The test results will be displayed in the terminal or the Cypress Test Runner, depending on the mode of execution.

## Project Structure

The project structure is organized as follows:

```
├── cypress
│   ├── fixtures
│   ├── integration
│   ├── plugins
│   └── support
└── ...
```

- `cypress`: This directory contains the main Cypress test files.
- `fixtures`: Contains fixture files used in tests (e.g., test data).
- `integration`: Contains test files that house the actual tests.
- `plugins`: Contains Cypress plugin

**Running Specific Tests**
```bash
cypress run –record --tag @1
```
