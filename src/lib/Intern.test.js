const Intern = require("./Intern");

describe("Intern", () => {
  it("should be an instance of Intern", () => {
    // set  value to compare with in test case

    const name = "Bob";
    const email = "Bob@gmail.com";
    const id = "1";
    intern = new Intern(name, id, email);

    const expected = intern;
    const actual = new Intern(name, id, email);
    expect(actual).toEqual(expected);
  });

  it("should return intern name", () => {
    const expected = "Aiman";

    const intern = new Intern("Aiman", 13, "Aiman@gmail.com", "Aiman12");

    const actual = intern.getName();

    expect(actual).toEqual(expected);
  });
  it("should return id", () => {
    const expected = "2";

    const intern = new Intern("Jane", "2", "Jane@gmail.com", "jane12");

    const actual = intern.getId();

    expect(actual).toEqual(expected);
  });
  it("should return school name", () => {
    const expected = "ab school";

    const intern = new Intern("Jane", "13", "Jane@gmail.com", "ab school");

    const actual = intern.getSchool();

    expect(actual).toEqual(expected);
  });

  it("should return Intern", () => {
    const expected = "Intern";

    const intern = new Intern("Jane", "13", "Jane@gmail.com", "ab school");

    const actual = intern.getRole();

    expect(actual).toEqual(expected);
  });
});
