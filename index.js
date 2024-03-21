const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const userInput = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username? ",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address? ",
    },
    {
        type: "input",
        name: "name",
        message: "What is your project's name? "
    },
    {
        type: "input",
        name: "description",
        message: "Provide a detailed overview of the project."
    },
    {
        type: "list",
        name: "license",
        message: "What is the license you are using? (Make your selection with the arrow keys, then press Enter) ",
        choices: ["Apache2.0", "BSD2", "BSD3","MIT"]
    },
    {
        type: "input",
        name: "installationCommand",
        message: "What command will be used to install dependencies?"
    },
    {
        type: "input",
        name: "testingCommand",
        message: "What command will be used to run tests?"
    },
    {
        type: "input",
        name: "repoInformation",
        message: "What does a viewer need to know about your repo?"
    },
    {
        type: "input",
        name: "contributions",
        message: "What does a viewer need to know about making contributions?"
    },

];


function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}


function init() {
    inquirer.prompt(userInput).then((responses)=>{
        writeToFile("./README.md", generateMarkdown({responses}))
    });
}

init();
