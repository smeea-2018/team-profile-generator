const { Engineer } = require("./Engineer");

describe("Engineer", () => {
  describe("getSchool", () => {
    it("should return school name", () => {
      const expected = "ab school";

      const intern = new Intern("Jane", 13, "Jane@gmail.com", "ab school");

      const actual = intern.getSchool();

      expect(actual).toEqual(expected);
    });
  });

  describe("getRole", () => {
    it("should return Intern", () => {
      const expected = "Intern";

      const intern = new Intern("Jane", 13, "Jane@gmail.com", "ab school");

      const actual = intern.getRole();

      expect(actual).toEqual(expected);
    });
  });
});
