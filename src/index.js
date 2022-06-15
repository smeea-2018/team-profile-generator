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

const init = async () => {
  const managerAnswers = await inquirer.prompt(managerQuestions);
  //   console.log(answers);
  answers.push(managerAnswers);
  //   console.log(answers);

  while (inProgress) {
    const selection = await inquirer.prompt(selectionQuestions);

    if (selection.proceed === "Add an engineer") {
      const engineerAnswers = await inquirer.prompt(engineerQuestions);
      answers.push(engineerAnswers);
    } else if (selection.proceed === "Add an intern") {
      const internAnswers = await inquirer.prompt(internQuestions);
      answers.push(internAnswers);
    } else {
      inProgress = false;
    }
  }
  console.log(answers);
};

init();
