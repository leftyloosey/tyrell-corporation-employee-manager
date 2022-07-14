INSERT INTO departments (dept_name)
VALUES ("Replicant Testing"),
       ("Accounting"),
       ("Janitoral");

INSERT INTO roles (job_title, salary, dept_id)
VALUES ("Tester", 50, 1),
       ("Accountant", 50, 2),
       ("Janitor", 500, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Sally", "Jenkins", 1, 0),
        ("Bob", "Hope", 2, 1),
        ("Algernon", "Moncrieff", 3, 1)
       