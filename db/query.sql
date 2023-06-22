SELECT employee.id, employee.first_name, employee.last_name, role.title AS "Role"
FROM employee
JOIN role ON role.id = employee.role_id