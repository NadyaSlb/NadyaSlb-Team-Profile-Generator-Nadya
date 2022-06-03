const Employee = require('../lib/Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
      this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        inquirer
        .prompt({
          type: 'text',
          name: 'officeNumber',
          message: 'What is the manager`s office number?'
        })
        .then(({ officeNumber }) => {
          this.manager = new Manager(officeNumber);
        });
      }

      getRole() {
        return {role: "Manager"}
    }
}

module.exports = Manager;