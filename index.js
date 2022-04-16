// TODO: Include packages needed for this application
const markdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your project's title?",
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A project name is required, you must provide one.");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "Please describe your project.",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A  project description is required.");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "What are the steps for installiation?",
        name: 'installation',
    },

    {
        type: 'input',
        message: "How is this project meant to be used?",
        name: 'usage',
        default: 'How to Use',
    },

    {
        type: 'list',
        message: "What license did you want for your project?",
        choices: ['Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'none'],
        name: 'license'
    },

    {
        type: 'input',
        message: "Are there any other major contributors? Or did you want to include information on how to become a contributor?",
        name: 'contributions'
    },
 
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'github',
        default: 'yourUsername',
    },

    {
        type: 'input',
        message: "What is your email address?",
        name: 'email',
        default: 'example@email.com',
    }
];


//Function to write README file

// Function call to initialize app
writeReadMe();