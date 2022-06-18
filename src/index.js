const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const {
  managerQuestions,
  engineerQuestions,
  internQuestions,
  selectionQuestions,
} = require("./utils/questions");

let team = [];
let inProgress = true;

// const createCard = (team) => {
//   return team.map((member) => {
//     return `<div class="card" style="width: 18rem">
//   <div class="card-header">
//     jane
//     <p class="card-text">${member.role}</p>
//   </div>
//   <div class="card-body">
//     <div class="card" style="width: 15rem">
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item">${member} Id: ${member.id}</li>
//         <li class="list-group-item">${member} Email: <a href = "mailto:someone@gmail.com.com" target = "_blank">${member.email}</a></li>
//         <li class="list-group-item">${member} Office Number:</li>
//       </ul>
//     </div>
//   </div>
// </div>`;
//   });
// };

const createManagerCard = (teamMembers) => {
  return teamMembers.map((member) => {
    return `<div class="card mb-2" style="width: 18rem">
  <div class="card-header card text-center card-title bg-secondary text-light">
    ${member.name}
    <p class="text-center">${member.role}</p>
  </div>
  <div class="card-body">
    <div class="card" style="width: 15rem">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${member.role} Id: ${member.id}</li>
        <li class="list-group-item">${member.role} Email: <a href = "mailto:${member.email}" target = "_blank">${member.email}</a></li>
        <li class="list-group-item">${member.role} Office Number: ${member.officeNumber}</li>
      </ul>
    </div>
  </div>
</div>`;
  });
};

const createEngineerCard = (teamMembers) => {
  return teamMembers.map((member) => {
    return `<div class="card mb-2" style="width: 18rem">
  <div class="card-header card text-center card-title bg-secondary text-light">
    ${member.name}
    <p class=" text-center">${member.role}</p>
  </div>
  <div class="card-body">
    <div class="card" style="width: 15rem">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${member.role} Id: ${member.id}</li>
        <li class="list-group-item">${member.role} Email: <a href = "mailto:${member.email}" target = "_blank">${member.email}</a></li>
        <li class="list-group-item">${member.role} github:<a href = "https://github.com/${member.githubName}" target =_blank>${member.githubName} </a></li>
      </ul>
    </div>
  </div>
</div>`;
  });
};

const createInternCard = (teamMembers) => {
  return teamMembers.map((member) => {
    return `<div class="card mb-2" style="width: 18rem  rem mb-5">
  <div class="card-header card text-center card-title bg-secondary text-light">
   ${member.name}
    <p class="text-center">${member.role}</p>
  </div>
  <div class="card-body">
    <div class="card" style="width: 15rem">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${member.role} Id: ${member.id}</li>
        <li class="list-group-item">${member.role} Email: <a href = "mailto:${member.email}" target = "_blank">${member.email}</a></li>
        <li class="list-group-item">${member.role} School: ${member.school}</li>
      </ul>
    </div>
  </div>
</div>`;
  });
};
const createCards = (team) => {
  // let teamManager = [];
  const teamManager = team.filter(function (employee) {
    return employee.role === "Manager";
  });

  let teamEngineer = [];
  teamEngineer = team.filter((employee) => employee.role === "Engineer");

  let teamIntern = [];
  teamIntern = team.filter((employee) => employee.role === "Intern");

  const managerCard = createManagerCard(teamManager).join("");
  const engineerCard = createEngineerCard(teamEngineer).join("");
  const internCard = createInternCard(teamIntern).join("");

  return `${managerCard}${engineerCard}${internCard}`;
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
      class="jumbotron border border-dark h-25 font-weight-bold bg-info text-white"
    >
      <h2 class="text-center justify-content-center align-middle">My Team</h2>
       <hr class="my-4">
    </header>
    <main id="main" class="main">
    <div class = "card d-flex flex-wrap flex-row justify-content-around mt-5" >
      ${createCards(team)}
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

const init = async () => {
  const managerAnswers = await inquirer.prompt(managerQuestions);

  const manager = new Manager(
    managerAnswers.name,
    managerAnswers.id,
    managerAnswers.email,
    managerAnswers.officeNumber
  );

  team.push(manager);

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
        internAnswers.name,
        internAnswers.id,
        internAnswers.email,
        internAnswers.school
      );
      team.push(intern);
    } else {
      inProgress = false;
    }
  }

  const generatedHtml = htmlGenerator(team);
  const filePath = path.join(__dirname, "../dist/index.html");

  fs.writeFileSync(filePath, generatedHtml);
};

init();
