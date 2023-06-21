const inquirer = require('inquirer');
const { listenerCount } = require('process');

const questions = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'main',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    }
]

const chooseOption = (response) =>
console.log(response)

inquirer
  .prompt(questions)
  .then((chooseOption));