SELECT roles.job_title as title, roles.salary as salary, departments.dept_name as department 
FROM roles
JOIN departments ON departments.id = roles.dept_id;
