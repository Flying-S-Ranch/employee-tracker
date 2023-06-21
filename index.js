const inquirer = require('inquirer');
const db = require('./server')

const questions = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'main',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    }
]

const displayChoice = (response) => {
    if(response === 'view all departments') {
    db.query('SELECT * FROM department', function (err, results){
        console.log(results);
    })
    }
}

inquirer
  .prompt(questions)
  .then((displayChoice));