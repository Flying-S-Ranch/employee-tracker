INSERT INTO department (name)
VALUES  ("Sales"),
        ("Research"),
        ("Accounting"),
        ("Production");

INSERT INTO role (title, salary, dept_id)
VALUES  ("Sales Rep", 50000, 1),
        ("Assistant to Sales Rep", 21000, 1),
        ("Lab Technician", 25000, 2),
        ("Senior Scientist", 75000, 2),
        ("Accountant", 50000, 3),
        ("Accounting Manager", 65000, 3),
        ("Production Coordinator", 45000, 4),
        ("Production Assistant", 22000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Ana", "Lopez", 4, NULL),
        ("James", "Robbins", 5, 10),
        ("Henry", "Carpenter", 7, NULL),
        ("Catharine", "Schmidt", 1, NULL),
        ("Rebecca", "Spencer", 3, 1),
        ("Charlotte", "Cooper", 4, NULL),
        ("Malcolm", "Thomas", 8, 8),
        ("Arthur", "Monroe", 7, NULL),
        ("Lydia", "Morris", 2, 4),
        ("Isabelle", "Martinez", 6, NULL)