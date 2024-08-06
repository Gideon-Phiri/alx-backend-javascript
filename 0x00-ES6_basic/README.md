# 0x00-ES6_basic

## Table of contents

0.  [Overview](#overview)
1.  [Objectives](#objectives)
2.  [0. Const or let](#0-constantsjs--0-const-or-let)
3.  [1. Block Scope](#1-block-scope-1-block-scopedjs)
4.  [2. Arrow functions](#2-arrow-functions-2-arrowjs)
5.  [3. Parameter defaults](#3-parameter-defaults-3-default-parameterjs)
6.  [4. Rest parameter syntax for functions](#4-rest-parameter-syntax-for-functions-4-rest-parameterjs)
7.  [5. The wonders of spread syntax](#5-the-wonders-of-spread-syntax-5-spread-operatorjs)
8.  [6. Take advantage of template literals](#6-take-advantage-of-template-literals-6-string-interpolationjs)
9.  [7. Object property value shorthand syntax](#7-object-property-value-shorthand-syntax-7-getbudgetobjectjs)
10. [8. No need to create empty objects before adding in properties](#8-no-need-to-create-empty-objects-before-adding-in-properties-8-getbudgetcurrentyearjs)
11. [9. ES6 method properties](#9-es6-method-properties--9-getfullbudgetjs)
12. [10. For...of Loops](#10-forof-loops-10-loopsjs)
13. [11. Iterator](#11-iterator-11-createemployeesobjectjs)
14. [12. Let's create a report object](#12-lets-create-a-report-object-12-createreportobjectjs)
15. [13. Iterating through report objects](#13-iterating-through-report-objects-100-createiteratorobjectjs)
16. [14. Iterate through object](#14-iterate-through-object-101-iteratethroughobjectjs)
17. [Running the Programs](#running-the-programs)
18. [Author](#author)

## Overview

ES6, also known as ECMAScript 2015, is the sixth version of the JavaScript programming language. It was a significant update that introduced many new features and improvements to make JavaScript more efficient, expressive, and easier to use. This project solves some basic problems using ES6.

## Objectives

- mastering the following;
  - What ES6 is
  - New features introduced in ES6
  - The difference between a constant and a variable
  - Block-scoped variables
  - Arrow functions and function parameters default to them
  - Rest and spread function parameters
  - String templating in ES6
  - Object creation and their properties in ES6
  - Iterators and for-of loops

## 0. Const or let (`0-constants.js`)

- Modifying function to instantiate variables using const and let

## 1. Block Scope (`1-block-scoped.js`)

- modifying the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.

## 2. Arrow functions (`2-arrow.js`)

- Rewriting the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)

## 3. Parameter defaults (`3-default-parameter.js`)

- Condensing the internals of the following function to 1 line - without changing the name of each function/variable.

## 4. Rest parameter syntax for functions (`4-rest-parameter.js`)

- Modifying the following function to return the number of arguments passed to it using the rest parameter syntax

## 5. The wonders of spread syntax (`5-spread-operator.js`)

- Using spread syntax, to concatenate 2 arrays and each character of a string by modifying the function. The function body should be one line long.

## 6. Take advantage of template literals (`6-string-interpolation.js`)

- Rewriting the return statement to use a `template literal` so I can the substitute the variables I’ve defined.

## 7. Object property value shorthand syntax (`7-getBudgetObject.js`)

- Modifying the following function’s `budget` object to simply use the keyname instead

## 8. No need to create empty objects before adding in properties (`8-getBudgetCurrentYear.js`)

- Rewriting the `getBudgetForCurrentYear` function to use ES6 computed property names on the `budget` object

## 9. ES6 method properties (` 9-getFullBudget.js`)

- Rewriting `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object

## 10. For...of Loops (`10-loops.js`)

- Rewriting the function `appendToEachArrayValue` to use ES6’s for...of operator. And don’t forget that var is not ES6-friendly.

## 11. Iterator (`11-createEmployeesObject.js`)

- A function named `createEmployeesObject` that will receive two arguments:

  - `departmentName` (String)
  - `employees` (Array of Strings)

## 12. Let's create a report object (`12-createReportObject.js`)

- Afunction named `createReportObject` whose parameter, `employeesList`, is the return value of the previous function `createEmployeesObject`.

- `createReportObject` return an object containing the key `allEmployees` and a method property called `getNumberOfDepartments`.

- `allEmployees` is a key that maps to an object containing the department name and a list of all the employee in that department. If you’re having trouble, use the spread syntax.

- The method property receives `employeesList` and returns the number of departments. I would suggest suggest thinking back to the ES6 method property syntax

## 13. Iterating through report objects (`100-createIteratorObject.js`)

- a function named `createIteratorObject`, that will take into argument a report Object created with the previous function `createReportObject`.

## 14. Iterate through object (`101-iterateThroughObject.js`)

## Running the Programs

To run the tasks projects in this directory:

Open a terminal (Command Prompt or PowerShell for Windows, Terminal for macOS or Linux)
Ensure `Git` is installed

Visit [https://git-scm.com](https://git-scm.com) to download and install `console Git` if not already installed

Install NodeJS 12.11.x

```sh
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
```

Clone the repository

```sh
    git clone https://github.com/Gideon-Phiri/alx-backend-javascript.git
```

Navigate to the project directory of your choice

```sh
    cd 0x00-ES6_basic
```

run `npm install` from the terminal of your project folder to install all necessary project dependencies.

```sh
    npm install
```

use the provided main.js files to execute the programs or create your one

```sh
    npm run dev 1-main.js
```

to execute `1-block-scoped.js`

## Author

- **Gideon Phiri**
- _Software Engineer_
- _[gideonphiri032@gmail.com](mailto:gideonphiri032@gmail.com)_
