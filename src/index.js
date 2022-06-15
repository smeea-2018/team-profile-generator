const inquirer = require("inquirer");
const { employeeQuestions } = require("./employeequestions");
const { selectionQuestions } = require("./selectionquestions");
let inProgress = true;

const init = async () => {
  const answers = await inquirer.prompt(employeeQuestions);
  console.log(answers);

  //   while (inProgress) {
  const selection = await inquirer.prompt(selectionQuestions);
  console.log(selection);
  // if (selection === "E") {
  //   console.log(selection);
  // }
  // if (selection === "I") {
  //   console.log(selection);
  // } else {
  //   inProgress = false;
  // }
  //   }
};

init();
