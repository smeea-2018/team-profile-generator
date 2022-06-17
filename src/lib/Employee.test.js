const Employee = require("./Employee");

// Test suite
describe("Employee", () => {
  // test case 1
  it("should return the expected name", () => {
    // set  value to compare with in test case
    const expected = "Bob";

    //Get value from Employee object
    const name = "Bob";
    const email = "Bob@gmail.com";
    const id = 1;
    const obj = new Employee(name, email, id);

    const actual = obj.getName();
    expect(actual).toEqual(expected);
  });
  it("should return expected id", () => {
    const expected = 1;

    const name = "Adam";
    const email = "Adam@gmail.com";
    const id = 1;
    const obj = new Employee(name, id, email);

    const actual = obj.getId();

    expect(actual).toEqual(expected);
  });
  it("should return expected email id", () => {
    const expected = "adam@gmail.com";

    const name = "Adam";
    const email = "adam@gmail.com";
    const id = 1;
    const obj = new Employee(name, id, email);

    const actual = obj.getEmail();
    expect(actual).toEqual(expected);
  });

  it("should return expected role", () => {
    const expected = "Employee";

    const name = "Adam";
    const email = "adam@gmail.com";
    const id = 1;
    const employee = new Employee(name, id, email);
    employee.getRole();

    const actual = obj.getRole();
    expect(actual).toEqual(expected);
  });
});
