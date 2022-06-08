const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
var teamArray = []

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
    teamArray.push(manager)
    console.log(teamArray)
    secondMenu();
  })
}


const secondMenu = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'userchoice',
      message: 'Whom do you want to add?',
      choices: ['engineer', 'intern']
    }
  ]).then(choice => {
    console.log(choice)
    if (choice.userchoice == 'engineer' ) {
      createEngineer()
      console.log(teamArray)
    }
    if (choice == 'intern' ) console.log("intern")

  })
}



const startEnqineer = () => {
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

    }])
}

startMenu()
// inquirer.prompt(,/.....)
// .then(data)
// data{
//   github: asdfjasd,
//   email: asdfkjasdfas
// }

// var Manager = new Managerl)

// module.exports = TeamBuilder;
