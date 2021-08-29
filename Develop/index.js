
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

var generateMarkdown = require("./utils/generateMarkdown");
    
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
function init() {

  inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "Submit Your Github Username"
    },
    {
      type: "input",
      name: "email",
      message: "Submit Your Email Address"
    },
    {
      type: "input",
      name: "title",
      message: "Submit The Name of Your Project"
      },
      {
        type: "input",
        name: "description",
        message: "Submit A Descrition For Your Project"
      },
      {
        type: "input",
        name: "installation",
        message: "Submit your projects Installation Instructions"
      },
      {
        type: "input",
        name: "usage",
        message: "Submit Usage Info"
      },
      {
          type: "input",
          name: "contribution",
          message: "Submit Your Project Contribution Guidelines"
      },
      {
          type: "input",
          name: "tests",
          message: "Submit Test Instructions"
      },
      { 
        
          type: "checkbox",
          message: "Licensing Options",
          name: "license",
          choices: [
              "None",
              "MIT",
              "Boost Software 1.0",
              "Apache2.0",
              "Creative Commons Zero v1.0 Universal",
              "Eclipse Public 2.0",
              "GNU Public v3.0",
              "GNU Affero General Public v3.0",
              "GNU General Public v2.0",
              "GNU Lesser General Public v2.1",
              "Mozilla Public 2.0",
            ]
        }
    ]).then(function(data) {

      console.log("Generating Markdown...");
      
      writeToFile("README.md", generateMarkdown({...data}));  
});
}

init()