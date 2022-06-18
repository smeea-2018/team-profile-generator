const Employee = require("./Employee");

// Test suite
describe("Employee", () => {
  // test case 1
  it("should create instance of Employee", () => {
    // set  value to compare with in test case

    const name = "Bob";
    const email = "Bob@gmail.com";
    const id = "1";
    employee = new Employee(name, id, email);

    const expected = employee;
    const actual = new Employee(name, id, email);
    expect(actual).toEqual(expected);
  });

  it("should return the expected name", () => {
    // set  value to compare with in test case
    const expected = "Bob";

    //Get value from Employee object
    const name = "Bob";
    const email = "Bob@gmail.com";
    const id = "1";
    const employee = new Employee(name, email, id);

    const actual = employee.getName();
    expect(actual).toEqual(expected);
  });
  it("should return expected id", () => {
    const expected = "1";

    const name = "Adam";
    const email = "Adam@gmail.com";
    const id = "1";
    const employee = new Employee(name, id, email);

    const actual = employee.getId();

    expect(actual).toEqual(expected);
  });
  it("should return expected email id", () => {
    const expected = "adam@gmail.com";

    const name = "Adam";
    const email = "adam@gmail.com";
    const id = "1";
    const employee = new Employee(name, id, email);

    const actual = employee.getEmail();
    expect(actual).toEqual(expected);
  });

  it("should return expected role", () => {
    const expected = "Employee";

    const name = "Adam";
    const email = "adam@gmail.com";
    const id = "1";
    const employee = new Employee(name, id, email);
    employee.getRole();

    const actual = employee.getRole();
    expect(actual).toEqual(expected);
  });
});
