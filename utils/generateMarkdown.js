
function generateMarkdown(answers) {
  return `
  ![License](https://img.shields.io/badge/License-${answers.license}-blue)
  # ${answers.title}

  ## Description
  #### ${answers.description}, ${answers.description_solve}
  ------------------------------------------------------

- [Installation](#installation)
- [Usage](#usage)
- [Collaborators](#Collaborators)
- [License](#license)
------------------------------------------------------

  ## Installation
  #### ${answers.install}
  ------------------------------------------------------
  ## Usage
  #### ${answers.usage}
  ![Usage Photo](${answers.usage_photo})
  ------------------------------------------------------
  ## Collaborators
  #### <a href='https://github.com/${answers.credit}'>${answers.credit}'s Profile</a>
  ------------------------------------------------------
  ## License
  ![License](https://img.shields.io/badge/License-${answers.license}-blue)
  #### This project has a(n) ${answers.license} license. 

 
  ------------------------------------------------------
  ## How to Contribute
  #### If you would like to contribute to this project please visit [Contributor Covenant](https://www.contributor-covenant.org/) and adhere to these guidlines. Thank you and happy coding!

  ## Questions and Concerns
  #### For questions about this repository please contact me via ${answers.contact}
  
`;
}

module.exports = generateMarkdown;
