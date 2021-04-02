// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

// TODO: Create an array of questions for user input
const askQuestions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: `Provide a short paragraph of the what, why and how's of your project?`,
      },
      {
        type: 'input',
        name: 'description_solve',
        message: `What problem does your project solve?`,
      },
      {
        type: 'input',
        name: 'install',
        message: `What are the steps to install your project, if any?`,
      },

      //TODO: add image file path for screenshots

      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples of intended use.',
      },
      {
        type: 'input',
        name: 'credit',
        message: 'If their are any collaborators, list their Github usernames?',
      },
      {
        type: 'checkbox',
        message: 'What license is this projecy?',
        name: 'license',
        choices: [
            {name: "MIT"},
            {name: "LIT"},
            {name: "BET"},
        ]},
        {
            type: 'input',
            name: 'contact',
            message: 'What is a good email for people to contact you with questions?',
          },
    ]);
    
  };
  
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    askQuestions()
    .then((answers) => writeToFile('README.md', generateMarkdown(data)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));

}

// Function call to initialize app
init();
