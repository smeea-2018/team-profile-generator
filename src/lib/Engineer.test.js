const Engineer = require("./Engineer");

describe("Engineer", () => {
  it("should be an instance of Engineer", () => {
    // set  value to compare with in test case

    const name = "Bob";
    const email = "Bob@gmail.com";
    const id = "1";
    engineer = new Engineer(name, id, email);

    const expected = engineer;
    const actual = new Engineer(name, id, email);
    expect(actual).toEqual(expected);
  });

  it("should return engineer name", () => {
    const expected = "Aiman";

    const engineer = new Engineer("Aiman", "13", "Aiman@gmail.com", "Aiman12");

    const actual = engineer.getName();

    expect(actual).toEqual(expected);
  });
  it("should return id", () => {
    const expected = "2";

    const engineer = new Engineer("Jane", "2", "Jane@gmail.com", "jane12");

    const actual = engineer.getId();

    expect(actual).toEqual(expected);
  });
  it("should return  email", () => {
    const expected = "jane@gmail.com";

    const engineer = new Engineer("Jane", "13", "jane@gmail.com", "jane12");

    const actual = engineer.getEmail();

    expect(actual).toEqual(expected);
  });

  it("should return github user name", () => {
    const expected = "jane12";

    const engineer = new Engineer("Jane", "13", "Jane@gmail.com", "jane12");

    const actual = engineer.getGithubName();

    expect(actual).toEqual(expected);
  });
});
