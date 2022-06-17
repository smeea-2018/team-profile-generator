const createCards = (team) => {
  let manager = [];
  manager = team.filter((employee) => employee.role === "Manager");

  console.log(manager);

  let engineer = [];
  engineer = team.filter((employee) => employee.role === "Engineer");
  console.log(engineer);

  let intern = [];
  intern = team.filter((employee) => employee.role === "Intern");
  console.log(intern);
  createcard(manager);
  createcard(engineer);
  createcard(intern);
};

createcard = (member) => {
  return team.map((member) => {
    return `<div class="card" style="width: 18rem">
  <div class="card-header">
    jane
    <p class="card-text">${member.role}</p>
  </div>
  <div class="card-body">
    <div class="card" style="width: 15rem">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${member} Id: ${member.id}</li>
        <li class="list-group-item">${member} Email: <a href = "mailto:someone@gmail.com.com" target = "_blank">${member.email}</a></li>
        <li class="list-group-item">${member} Office Number:</li>
      </ul>
    </div>
  </div>
</div>`;
  });
};
