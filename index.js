// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
},

{
    type: 'input',
    name: 'description',
    message: 'Describe your project'
},

{
    type: 'input',
    name: 'installation',
    message: 'Installation instructions'
},

{
    type: 'input',
    name: 'usage',
    message: 'Usage information'
},

{
    type: 'input',
    name: 'contributing',
    message: 'Contribution guidelines'
},

{
    type: 'input',
    name: 'tests',
    message: 'Test instructions',
},

{
    type: 'input',
    name: 'description',
    message: 'Describe your project'
},

{
    type: 'list',
    name: 'license',
    message: 'What licenses did you use for your application?',
    choices: ['MIT', 'Apache', 'GNU', 'ISC']
},

{
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
},

{
    type: 'input',
    name: 'email',
    message: 'What is your email address?'

}];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,  (err) => {
        if (err)
          console.log(err);
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
           console.log(answers)

           //TODO: generate markdown using data from answers to questions
            var markdown = generateMarkdown(answers)

           // TODO: write markdown text to file
           writeToFile('newReadme.md', markdown)

        });


}

// Function call to initialize app
init();

