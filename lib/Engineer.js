const Employee = require('../lib/Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
      this.github = github;
    }

    getGithub() {
        inquirer
        .prompt({
          type: 'text',
          name: 'github',
          message: 'What is the engineer`s GitHub username?'
        })
        .then(({ github }) => {
          this.engineer = new Engineer(github);
        });
      }

      getRole() {
        return {role: "Engineer"}
    }
}

module.exports = Engineer;