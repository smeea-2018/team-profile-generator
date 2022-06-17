const managerQuestions = [
  {
    type: "input",
    name: "teamName",
    message: "Please enter title of your team",
  },

  {
    type: "input",
    name: "managerName",
    message: "Please enter team manager name",
  },

  {
    type: "input",
    name: "managerId",
    message: "Please enter manager ID:",
  },

  {
    type: "input",
    name: "managerEmail",
    message: "Please enter manager email address:",
  },

  {
    type: "input",
    name: "officeNumber",
    message: "Please enter manager office number:",
  },
];

selectionQuestions = [
  {
    type: "list",
    name: "proceed",
    message: " What would you like to do next:",
    choices: ["Add an engineer", "Add an intern", "Quit application"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "Please enter team engineer name",
  },

  {
    type: "input",
    name: "engineerId",
    message: "Please enter engineer ID:",
  },

  {
    type: "input",
    name: "engineerEmail",
    message: "Please enter engineer email address:",
  },

  {
    type: "input",
    name: "githubUserName",
    message: "Please enter engineer github username::",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internId",
    message: "Please enter intern ID:",
  },

  {
    type: "input",
    name: "internEmail",
    message: "Please enter intern email address:",
  },

  {
    type: "input",
    name: "internSchool",
    message: "Please enter intern school:",
  },
];

module.exports = {
  managerQuestions,
  selectionQuestions,
  engineerQuestions,
  internQuestions,
};
