const { Manager } = require("./Manager");

describe("Manager", () => {
  describe("getOfficeNumber", () => {
    it("should return officeNumber", () => {
      const expected = 10;

      const manager = new Manager("Jane", 13, "Jane@gmail.com", 10);

      const actual = manager.getOfficeNumber();

      expect(actual).toEqual(expected);
    });
  });

  describe("getRole", () => {
    it("should return Manager", () => {
      const expected = "Manager";

      const manager = new Manager("Jane", 13, "Jane@gmail.com", 10);

      const actual = manager.getRole();

      expect(actual).toEqual(expected);
    });
  });
});
