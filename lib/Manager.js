const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
      this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
      //return {
       // type: 'text',
       // name: 'name',
      //  message: 'What is the employee`s name?'
      //}
    }

      getRole() {
        return "Manager"
    }
}

module.exports = Manager;