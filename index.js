const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");



function questions() {
    return inquirer.prompt([
      {
          type: "input",
          message: "What is your GitHub username?",
          name: "username"
      },
      {
          type: "input",
          message: "What is your email address?",
          name: "email"
      },
      {
          type: "input",
          message: "what is your project name?",
          name: "name"
      },
      {
          type: "input",
          message: "Please write a short description of your project.",
          name: "description"
      },
      {
          type: "input",
          message: "what kind of license should your project use?",
          name: "license" 
      },
      {
          type: "input",
          message: "What command should be run to install dependencies?",
          name: "npm"
      },
      {
          type: "input",
          message: "what command should be run to run test?",
          name: "run",
      },
      {
          type: "input",
          message: "what does the user need to know about using the repo?",
          name: "repo"
      },
      {
          type: "input",
          message: "what does the user need to know about contributing to the repo?",
          name: "contribution"
      }
    ]);
}; 


function writetoFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function (err) {
        if (err) {
            throw err;
        }
        console.log("You have successfully written your README file");
    });
};

async function init() {
    try {
        const answers = await questions();
        generateReadme(answers);
        writetoFile("README.md", generateReadme(answers));

    } catch (err) {
        console.log(err);
    }
};



init();