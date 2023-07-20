// Importing inquirer and fs for user prompts and file system adjustments
const inquirer = require('inquirer');
const fs = require('fs');

// Questions for user to help build their logo
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter 1-3 letters for your logo: ',
            name: 'logoText',
        },
        {
            type: 'input',
            message: 'Pick a color for the logo text (keyword or hexidecimal number): ',
            name: 'logoTextColor',
        },
        {
            type: 'list',
            message: 'Pick a shape for your logo',
            name: 'logoShape',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            message: 'Pick a color for the shape (keyword or hexidecimal number): ',
            name: 'logoShapeColor',
        }
    ])
    .then((answers) => {
        console.log(answers);
    })