const managerQuestions = [
  // {
  //   type: "input",
  //   name: "teamName",
  //   message: "Please enter title of your team",
  //   // validate: (answer) => {
  //   //   if (!answer) {
  //   //     return chalk.yellow(" Please enter a team name");
  //   //   } else {
  //   //     return true;
  //   //   }
  //   // },
  // },

  {
    type: "input",
    name: "name",
    message: "Please enter team manager name",
    // validate: (answer) => {
    //   if (!answer) {
    //     chalk.yellow(" Please enter a team name");
    //   } else {
    //     return true;
    //   }
    // },
  },

  {
    type: "input",
    name: "id",
    message: "Please enter manager ID:",
    // validate: (answer) => {
    //   if (!answer || isNaN(answer)) {
    //     chalk.yellow(" Please enter a value. The value must be a number");
    //   } else {
    //     return true;
    //   }
    // },
  },

  {
    type: "input",
    name: "email",
    message: "Please enter manager email address:",
    // validate: (email) => {
    //   if (email === /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) {
    //     return true;
    //   } else {
    //     return chalk.yellow(" Please enter valid email address");
    //   }
    // },
  },

  {
    type: "input",
    name: "officeNumber",
    message: "Please enter manager office number:",
    //   validate: (answer) => {
    //     if (!answerc || !isNaN(answer)) {
    //       chalk.yellow(" Please enter a value. The value must be a number");
    //     } else {
    //       return true;
    //     }
    //   },
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
    name: "name",
    message: "Please enter team engineer name",
  },

  {
    type: "input",
    name: "id",
    message: "Please enter engineer ID:",
  },

  {
    type: "input",
    name: "email",
    message: "Please enter engineer email address:",
  },

  {
    type: "input",
    name: "githubName",
    message: "Please enter engineer github username::",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter team intern name",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter intern ID:",
  },

  {
    type: "input",
    name: "email",
    message: "Please enter intern email address:",
  },

  {
    type: "input",
    name: "school",
    message: "Please enter intern school:",
  },
];

module.exports = {
  managerQuestions,
  selectionQuestions,
  engineerQuestions,
  internQuestions,
};
