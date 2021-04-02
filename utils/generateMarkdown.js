// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}
  ------------------------------------------------------
  ## Description
  ${answers.description}, ${answers.description_solve}
  ------------------------------------------------------

- [Installation](#installation)
- [Usage](#usage)
- [Collaborators](#Collaborators)
- [License](#license)
------------------------------------------------------

  ## Instalation
  ${answers.install}
  ------------------------------------------------------
  ## Usage
  ${answers.usage}
  ------------------------------------------------------
  ## Collaborators
  ${answers.credit}
  ------------------------------------------------------
  ## License
  ${answers.license}
  ------------------------------------------------------
  ## Questions and Concerns
  ${answers.contact}
  
`;
}

module.exports = generateMarkdown;
