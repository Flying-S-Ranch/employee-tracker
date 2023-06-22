const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '4frodo',
        database: 'business_db'
    },
    console.log(`Connected to the business_db database `)
);

const questions = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'main',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    }
]

const displayChoice = (response) => {
    if(response = 'view all departments') {
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results)
    })
    }
}

inquirer
  .prompt(questions)
  .then((displayChoice));