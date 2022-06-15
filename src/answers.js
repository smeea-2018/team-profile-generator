const inquirer = require("inquirer");
const {
  managerQuestions,
  selectionQuestions,
  engineerQuestions,
  internQuestions,
} = require("./utils/questions");

const inquirer = require("inquirer");
const { Manager } = require("./lib/Manager");

//Import modules containing questions for different employee categories
const {
  managerQuestions,
  selectionQuestions,
  engineerQuestions,
  internQuestions,
} = require("./utils/questions");


const answers = [];
let inProgress = true;

const init = asyn() => {

    const answers = await inquirer.prompt(managerQuestions);
    const manager = new Manager(answers.name, answers.id, answers.email,answers.officeNumber);
    

}




init();
