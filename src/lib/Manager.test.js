const Manager = require("./Manager");

describe("getOfficeNumber", () => {
  it("should return manager name", () => {
    const expected = "Aiman";

    const manager = new Manager("Aiman", 13, "Aiman@gmail.com", "Aiman12");

    const actual = manager.getName();

    expect(actual).toEqual(expected);
  });
  it("should return officeNumber", () => {
    const expected = "10";

    const manager = new Manager("Jane", "13", "Jane@gmail.com", "10");

    const actual = manager.getOfficeNumber();

    expect(actual).toEqual(expected);
  });

  it("should return Manager", () => {
    const expected = "Manager";

    const manager = new Manager("Jane", "13", "Jane@gmail.com", "10");

    const actual = manager.getRole();

    expect(actual).toEqual(expected);
  });
});
