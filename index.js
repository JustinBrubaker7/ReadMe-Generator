const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


inquirer
  .prompt([
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
      message: 'Are there any collaborators, if so list their Github usernames?',
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
  ])
  .then((answers) => {
    const readMeContent = generateMarkdown(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
