const inquirer = require("inquirer");
const { Manager } = require("./lib/Manager");

//Import modules containing questions for different employee categories
const {
  managerQuestions,
  selectionQuestions,
  engineerQuestions,
  internQuestions,
} = require("./utils/questions");

//const answers = [];
let inProgress = true;

const init = async () => {
  const answers = await inquirer.prompt(managerQuestions);
  const manager = new Manager(
    answers.name,
    answers.id,
    answers.email,
    answers.officeNumber
  );
  while (inProgress) {
    const selection = await inquirer.prompt(selectionQuestions);
    if (selection.proceed === "Add an engineer") {
      const engineerAnswers = await inquirer.prompt(engineerQuestions);
      const engineer = new Engineer(
        engineerAnswers.name,
        engineerAnswers.id,
        engineerAnswers.email,
        engineerAnswers.githubName
      );
      //answers.push(engineerAnswers);
    } else if (selection.proceed === "Add an intern") {
      const internAnswers = await inquirer.prompt(internQuestions);
      const intern = new Intern(
        internAnswers,
        internAnswers.id,
        internAnswers.email,
        internAnswers.officeNumber
      );
      // answers.push(internAnswers);
    } else {
      inProgress = false;
    }
  }
  console.log(manager);
};

init();
