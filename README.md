# HowHow

howhow is a web application built with React.js, TypeScript, and Bootstrap. It utilizes Yarn as a package manager.

## Overview

The project includes an ``.env.example`` file with the following environment variables:

To configure the application, copy the `.env.example` file and rename it to `.env`. Update the values of the environment variables in the `.env` file according to your specific configuration.

To ensure the proper functioning of the application, a backend server is required for email submission through the form. The backend server can be found at howhow-api: https://github.com/profparedes/howhow-api. Please refer to the README file of the backend repository for installation instructions.

The project also includes tests that can be executed using the yarn test command.

The project is hosted on Netlify. You can access the live version of the application at https://howhow.fabioparedes.dev.

### Installation
1. Clone the repository:
```
git clone https://github.com/profparedes/howhow-web-app.git
```
2. Navigate to the project directory:
```
cd howhow
```
3. Install the dependencies using Yarn:
```
yarn
```
4. To start the development server, run the following command:
```
yarn dev
```
This will launch the application at http://localhost:3000 in your browser.

### Testing
To run the tests, use the following command:
```
yarn test
```
This will execute the test suite and provide the test results.