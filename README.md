# playwright-cucumber-api-apmm

## **Overview:**

This is a sample test automation framework developed using **Playwright** with **Cucumber**.

**Playwright** is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API. Playwright is built to enable cross-browser web automation that is ever-green, capable, reliable and fast.

**Cucumber** is a tool for running automated tests written in plain language. Because they're written in plain language, they can be read by anyone on your team. Because they can be read by anyone, you can use them to help improve communication, collaboration and trust on your team. Cucumber supports behavior-driven development. Central to the Cucumber BDD approach is its ordinary language parser called Gherkin. 

## This template was modified only for REST API Shipping colection from Coordinadora-------

## Features

- This testing framework supports Behavior Driven Development (BDD). Tests are written in plain English text called Gherkin

#### Steps to use
##### 1. Installation

Playwright framework requires [Node.js](https://nodejs.org/) v14+ to run.

Installing the dependencies.
```sh
npm ci
```
##### 2. Test creation
- Test scenarios are organized into features and these feature files should be placed inside features folder.
- Step definitions connect Gherkin steps in feature files to programming code. A step definition carries out the action that should be performed by the scenario steps. These step definitions should placed inside steps folder in different packages.

##### 3. Execution
To run test scenarios use below command.
```sh
npm run test
```
To run specific scenario, use tags command. Below are few examples.
```sh
npm run test:tags @sanity
npm run test:tags "@calculator or @author"
npm run test:tags "@rest and @author"
```
To dry run test scenarios use below command.
```sh
npm run dry:test
```
To rerun the failed test scenarios use below command.
```sh
npm run failed:test
```
To change any environment configuration in .env file at run time use set command.
```sh
npm run report
```
##### 4. Report & Logs
Cucumber HTML report will be present inside
```sh
test-results/reports/cucumber.html
```
HTML report will be present inside
```sh
test-results/reports/html/index.html
```
Execution log will be present in the log file.
```sh
test-results/logs/execution.log
```

## git hub https://github.com/AdrianaMoraMM/playwright-cucumber-api-apmm