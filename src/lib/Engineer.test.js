const Engineer = require("./Engineer");

describe("Engineer", () => {
  describe("getGithubName", () => {
    it("should return github user name", () => {
      const expected = "jane12";

      const engineer = new Engineer("Jane", 13, "Jane@gmail.com", "jane12");

      const actual = engineer.getGithubName();

      expect(actual).toEqual(expected);
    });
  });

  describe("getRole", () => {
    it("should return Intern", () => {
      const expected = "Engineer";

      const engineer = new Engineer("Jane", 13, "Jane@gmail.com", "jane12");

      const actual = engineer.getRole();

      expect(actual).toEqual(expected);
    });
  });
});
