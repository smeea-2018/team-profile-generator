const Employee = require("./Employee");

describe("Employee", () => {
  // Test case 1
  describe("getName", () => {
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
  });

  //   Test case 3
  describe("getId", () => {
    it("should return expected id", () => {
      const expected = 1;

      const name = "Adam";
      const email = "Adam@gmail.com";
      const id = 1;
      const obj = new Employee(name, id, email);

      const actual = obj.getId();

      expect(actual).toEqual(expected);
    });
  });

  describe("getEmail", () => {
    it("should return expected email id", () => {
      const expected = "adam@gmail.com";

      const name = "Adam";
      const email = "adam@gmail.com";
      const id = 1;
      const obj = new Employee(name, id, email);

      const actual = obj.getEmail();
      expect(actual).toEqual(expected);
    });
  });
});
