const inquirer = require('inquirer');
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

  getName() {
    return this.name
  }

  getId() {
    return this.id
   // return {
      //  type: 'text',
      //  name: 'id',
     //   message: 'What is the employee`s id?'
    //  }
       }

  getEmail() {
   return this.email
    //return {
     //   type: 'text',
     //   name: 'email',
      //  message: 'What is the employee`s email?'
     // }
  }

  getRole() {
      return "Employee"
}
}

module.exports = Employee;
