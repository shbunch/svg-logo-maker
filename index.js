// Importing inquirer and fs for user prompts and file system adjustments
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require("./lib/shapes");

// Questions for user to help build their logo
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter 1-3 letters for your logo: ',
            name: 'logoText',
            // validate: function(input) {
            //     console.log(input);
            //     return (input.length < 4) ?true:false
            // }
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
    // User prompts serve as class parameters for shape and gets rendered to logo.svg
    .then((answers) => {
        let newShape
        if(answers.logoShape === "Circle"){
            newShape = new Circle(answers.logoText, answers.logoTextColor, answers.logoShapeColor)
        }
        if(answers.logoShape === "Triangle"){
            newShape = new Triangle(answers.logoText, answers.logoTextColor, answers.logoShapeColor)
        }
        if(answers.logoShape === "Square"){
            newShape = new Square(answers.logoText, answers.logoTextColor, answers.logoShapeColor)
        }
        newShape.render()
        fs.writeFile('logo.svg', newShape.shape, (err) =>
            err ? console.error(err) : console.log('Generated logo.svg')
        );
    })