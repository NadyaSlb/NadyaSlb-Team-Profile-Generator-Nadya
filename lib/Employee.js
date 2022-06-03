const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

  getName() {
    inquirer
    .prompt({
      type: 'text',
      name: 'name',
      message: 'What is the employee`s name?'
    })
    .then(({ name }) => {
      this.employee = new Employee(name);
    });
  }

  getId() {
    inquirer
    .prompt({
      type: 'text',
      name: 'id',
      message: 'What is the employee`s ID?'
    })
    .then(({ id }) => {
      this.employee = new Employee(id);
    });
  }

  getEmail() {
    inquirer
    .prompt({
      type: 'text',
      name: 'email',
      message: 'What is the employee`s email?'
    })
    .then(({ email }) => {
      this.employee = new Employee(email);
    });
  }

  getRole() {
      return {role: "Employee"}
  }
}

module.exports = Employee;
