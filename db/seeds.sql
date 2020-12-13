INSERT INTO department(name)
VALUES("Teacher"),
    ("Principle"),
    ("Janitor"),
    ("Sad I.T. Guy");
INSERT INTO role(title, salary, department_id)
VALUES("Lead", 100.00, 4),
    ("Assistant", 20.30, 1),
    ("Student", 302.01, 4),
    ("Intern", 0.00, 3);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("john", "doe", 1, 1),
    ("janen", "doe", 2, 1),
    ("Billy", "bob", 3, 1);