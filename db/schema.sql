DROP DATABASE IF EXISTS tyrell_corp_db;
CREATE DATABASE tyrell_corp_db;

USE tyrell_corp_db;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    dept_id INT,
   
    FOREIGN KEY (dept_id)
    REFERENCES departments(id)
    ON DELETE SET NULL
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES departments(id)
    ON DELETE SET NULL
    -- FOREIGN KEY (manager_id)
    -- REFERENCES employees(id)
    -- ON DELETE SET NULL
);