const inquirer = require("inquirer");
const fs = require("fs");

const { Employee } = require("./lib/Employee");
const { Manager } = require("./lib/Manager");
const { Engineer } = require("./lib/Engineer");
const { Intern } = require("./lib/Intern");

const createCard = () => {
  return `<div class="card" style="width: 18rem">
  <div class="card-header">
    jane
    <p class="card-text">Manager</p>
  </div>
  <div class="card-body">
    <div class="card" style="width: 15rem">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">managerId:</li>
        <li class="list-group-item">managerEmail:</li>
        <li class="list-group-item">m:</li>
      </ul>
    </div>
  </div>
</div>`;
};
const createCards = (team) => {
  team.map((card) => card.createCard()).join("");
};

// Generate html cards
const htmlGenerator = (team) => {
  return ` <html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />

    <link rel="stylesheet" href="./assets/css/style.css" />
    <script
      src="https://kit.fontawesome.com/68a31b9037.js"
      crossorigin="anonymous"
    ></script>
    <title>Team Profile</title>
  </head>
  <body><header
      id="header "
      class="header border border-dark h-25 font-weight-bold bg-info text-white"
    >
      <h2 class="text-center justify-content-center align-middle">My Team</h2>
    </header>
    <main id="main" class="main">
    <div class = "d-flex flex-row flex-row justify-content-around mt-5" >
      ${createCards}
      </div>
    </main>
    <script src="index.js"></script>
    <script
      src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
      integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js"
      integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
      crossorigin="anonymous"
    ></script>
  </body>
</html>`;
};

//Import modules containing questions for different employee categories
const {
  managerQuestions,
  engineerQuestions,
  internQuestions,
  selectionQuestions,
} = require("./utils/questions");

const team = [];
let inProgress = true;

const init = async () => {
  const managerAnswers = await inquirer.prompt(managerQuestions);

  const manager = new Manager(
    managerAnswers.name,
    managerAnswers.id,
    managerAnswers.email,
    managerAnswers.officeNumber
  );

  team.push(manager);
  console.log(managerAnswers);

  // once you have the answers, create a new manager object and pass in these answers to the constructor

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
      team.push(engineer);
    } else if (selection.proceed === "Add an intern") {
      const internAnswers = await inquirer.prompt(internQuestions);

      const intern = new Intern(
        internAnswers,
        internAnswers.id,
        internAnswers.email,
        internAnswers.officeNumber
      );
      team.push(intern);
    } else {
      inProgress = false;
    }
  }
  console.log(team);

  const generatedHtml = htmlGenerator(team);
  // const filePath = path.join(__dirname, "./dist", );

  fs.writeFileSync("./index.html", generatedHtml);
};

init();
