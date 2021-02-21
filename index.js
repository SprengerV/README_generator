const inquirer = require("inquirer");
const fs = require("fs");
const generateMd = require('./lib/generateMd.js')
const saveMd = require('./lib/save.js')

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Welcome to README Generator!\nTo begin, enter your name. This will be included in the CONTACT section of your README.",
            default: "Anonymous",
            // TODO: make it capitalize first letter of each word
            // filter: ,

        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address. This will be included in the CONTACT section of your README.",
        },
        {
            type: "input",
            name: "gitName",
            message: "What is your GitHub user name?"
        },
        {
            type: "input",
            name: "projName",
            message: "What is the name of your project?"
        },
        {
            type: "input",
            name: "repoURL",
            message: "What is the URL of your project's repository?"
        },
        {
            type: "input",
            name: "desc",
            message: "Give me a brief description of your project. This will be included in the ABOUT section of your README"
        },
        {
            type: "input",
            name: "tech",
            message: "Tell me which technologies were used to build your project. Separate different items with the tab key. Example: 'Example 1    Example 2   ...etc.'"
        },
        {
            type: "input",
            name: "usage",
            message: "Tell me the use cases for your project. This will be included in the USAGE section of your README."
        },
        {
            type: "input",
            name: "install",
            message: "Tell me the procedures for installing your application. This will be included in the INSTALL section of your README."
        },
        {
            type: "input",
            name: "test",
            message: "Tell me the procedures for testing your project. This will be included in the TESTING section of your README."
        },
        {
            type: "list",
            name: "license",
            message: "Which license will you be using for your project?",
            choices: ["Apache-2.0", "MPL-2.0", "BSD-3-Clause", "BSD-2-Clause", "MIT", "GPL-2.0", "GPL-3.0", "LGPL-3.0", "AGPL-3.0", "Unlicense", "None"]
        }
    ])
    .then((ans) => {
        saveMd(ans, generateMd(ans));  
    })
    .catch((error) => {
        console.log(error);
    });


