const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '4frodo',
        database: 'business_db'
    },
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
    // I used the example in module 9 activity 20 to make the response into a JSON string
    let answerString = JSON.stringify(response)
    if(answerString === '{"main":"view all departments"}') {
        db.query('SELECT * FROM department', function (err, results) {
            console.table(results)
        })
    } else if (answerString === '{"main":"view all roles"}') {
        db.query(`SELECT role.id, role.title, role.salary, department.name AS "Department"
        FROM role
        JOIN department ON department.id = role.dept_id`, function (err, results) {
            console.table(results)
        } )
        
    } else if (answerString=== '{"main":"view all employees"}') {
        db.query(`SELECT employee.id, employee.first_name, employee.last_name, role.title AS "Role"
        FROM employee
        JOIN role ON role.id = employee.role_id`, function (err, results) {
            console.table(results)
        })
    }
    
}

inquirer
  .prompt(questions)
  .then((displayChoice));