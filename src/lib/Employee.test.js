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
      console.log(actual);
    });
  });

  //   Test case 2
  describe("getName", () => {
    it("should return the test fail message", () => {
      const expected = "Bob";

      const name = "Adam";
      const email = "Adam@gmail.com";
      const id = 1;
      const obj = new Employee(name, id, email);

      const actual = obj.getName();
      console.log(actual);
      expect(actual).toEqual(expected);
      console.log(obj.getName());
    });
  });
});
