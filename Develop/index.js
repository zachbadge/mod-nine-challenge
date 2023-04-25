// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function userInput(){
    return inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What's the title of the project?"
    },

    {
        type: "input",
        name: "description",
        message: "What does the project's do?"
    },

    {
        type: "input",
        name: "license",
        message: "What license did you select?"
    },

    {
        name: 'install',
        message: 'How do I install this application?',
        type: 'input'
    },

    {
        name: 'usage',
        message: 'How do I use this application?',
        type: 'input'
    },

    {
        name: 'add',
        message: 'How can I add to this application?',
        type: 'input'
    },

    {
        name: 'testing',
        message: 'How can I test this application?',
        type: 'input'
    },

    {
        name: 'username',
        message: 'What is your Github username?',
        type: 'input'
    },

    {
        name: 'email',
        message: 'What is your e-mail?',
        type: 'input'
    },

    {   name: 'fileName',
        message: 'What do you want to title this readme?',
        type: 'input'
    },
])};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, 
    (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated.`))
};

// TODO: Create a function to initialize app
async function init() {
    let answers = await userInput();
    writeToFile((answers.fileName),(generateMarkdown(answers)));
}

// Function call to initialize app
init();
