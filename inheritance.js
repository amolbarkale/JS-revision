class Employee {
  constructor(name, id) {
    (this.name = name), (this.id = id);
  }
  getEmployee() {
    return this.name;
  }
  getEmployeeId() {
    return this.id;
  }
  getlogin() {
    return "You are logged in as a Employee!";
  }
}

class newEmployee extends Employee {
  getSubAdmin() {
    return "I am subAdmin";
  }
}

let details = new Employee("amol", "85");
console.log(details.getEmployee());
console.log(details.getEmployeeId());
console.log(details.getlogin());

let tom = new newEmployee();
console.log(tom.getSubAdmin());
console.log(tom.getlogin());
