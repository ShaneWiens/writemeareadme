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

  
//Function to write README file

// Function call to initialize app
writeReadMe();