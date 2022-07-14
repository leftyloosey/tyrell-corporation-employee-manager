-- SELECT roles.job_title as title, roles.salary as salary, departments.dept_name as department 
-- FROM roles
-- JOIN departments ON departments.id = roles.dept_id;

SELECT employees.first_name, last_name as employee_name, departments.dept_name as department 
FROM employees
JOIN departments ON departments.id = employees.id;
