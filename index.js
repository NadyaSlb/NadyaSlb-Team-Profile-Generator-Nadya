const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/htmltemplate');
var team = []


// class TeamBuilder {
//     constructor() {
//       this.Employee = ;
//       this.manager;
//       this.engineer;
//       this.intern;
//     }

//     startBuilding(){
//         console.log('To build your team, please enter your employee`s data.');
//     }
//     }
// name, id, email, officeNumber
// new TeamBuilder().startBuilding();
const startMenu = () => {
  inquirer.prompt([
    {
      type: 'text',
      name: 'name',
      message: 'What is the manager`s name?'
    },
    {
      type: 'text',
      name: 'id',
      message: 'What is the manager`s id?'
    },
    {
      type: 'text',
      name: 'email',
      message: 'What is the manager`s email?'
    },
    {
      type: 'text',
      name: 'officeNumber',
      message: 'What is the manager`s office number?'
    }
  ]).then(data => {
   const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
    console.log(manager)
    team.push(manager)
    secondMenu();
  })
}

const secondMenu = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'userchoice',
      message: 'Do you want to add an employee?',
      choices: ['yes', 'no']
    }
  ]).then(choice => {
    if (choice.userchoice == 'yes' ) {
      thirdMenu()
    }
    if (choice.userchoice == 'no' ) {
    // generateHTML(manager)
    // .then(pageHTML => {
    //   return writeToFile(pageHTML);
    // })
    // .catch(err => {
    //   console.log(err);
    // });

    }
  })
}

const thirdMenu = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'userchoice',
      message: 'Whom do you want to add?',
      choices: ['engineer', 'intern']
    }
  ]).then(choice => {
    if (choice.userchoice == 'engineer' ) {
      createEnqineer()
    }
    if (choice.userchoice == 'intern' ) {
      createIntern()
    }
  })
}

const createEnqineer = () => {
  inquirer.prompt([
    {
      type: 'text',
      name: 'name',
      message: 'What is the employee`s name?'
    },
    {
      type: 'text',
      name: 'id',
      message: 'What is the employee`s id?'
    },
    {
      type: 'text',
      name: 'email',
      message: 'What is the employee`s email?'
    },
    {
      type: 'text',
      name: 'github',
      message: 'What is the ingineer`s github username?'
    }]).then(data => {
      const engineer = new Engineer(data.name, data.id, data.email, data.github)
      console.log(engineer)
      team.push(engineer)
      console.log(team)
      secondMenu()
    })
}

const createIntern = () => {
  inquirer.prompt([
    {
      type: 'text',
      name: 'name',
      message: 'What is the employee`s name?'
    },
    {
      type: 'text',
      name: 'id',
      message: 'What is the employee`s id?'
    },
    {
      type: 'text',
      name: 'email',
      message: 'What is the employee`s email?'
    },
    {
      type: 'text',
      name: 'school',
      message: 'What is the intern`s school?'
    }]).then(data => {
      const intern = new Intern(data.name, data.id, data.email, data.school)
      console.log(intern)
      team.push(intern)
      console.log(team)
      secondMenu()
    })
}

const writeToFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};
module.exports = writeToFile;

startMenu()
// inquirer.prompt(,/.....)
// .then(data)
// data{
//   github: asdfjasd,
//   email: asdfkjasdfas
// }

// var Manager = new Managerl)

// module.exports = TeamBuilder;
