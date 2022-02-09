class Employee {
  setEmploeeDetails(name, id, phone) {
    this.name = name;
    this.id = id;
    this.phone = phone;
  }

  getEmployeeName() {
    return this.name;
  }
  getEmplyeeId() {
    return this.id;
  }
  getEmplyeePhone() {
    return this.phone;
  }
}

let emp1 = new Employee();

emp1.setEmploeeDetails("Amol", "101", "8626022099");
console.log(emp1.getEmployeeName());
console.log(emp1.getEmplyeeId());
console.log(emp1.getEmplyeePhone());
