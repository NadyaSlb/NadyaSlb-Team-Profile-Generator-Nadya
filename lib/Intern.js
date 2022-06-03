const Employee = require('../lib/Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
      this.school = school;
    }

    getSchool() {
        inquirer
        .prompt({
          type: 'text',
          name: 'school',
          message: 'What is the intern`s school?'
        })
        .then(({ school }) => {
          this.intern = new Intern(school);
        });
      }

      getRole() {
        return {role: "Intern"}
    }
}

module.exports = Intern;