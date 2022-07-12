const inquirer = require("inquirer")
const prompts = require("/Users/davidhardin/Desktop/ch/ch12b/prompts/prompts")
const cTable = require('console.table');
// const db = require("/Users/davidhardin/Desktop/ch/ch12b/db/connection.js")
// const mysql = require('mysql2');
const { db } = require("/Users/davidhardin/Desktop/ch/ch12b/db/connection.js")


class QueryFunction {
    constructor(showTables) {
        this.showTables = "SHOW TABLES"
        this.showDepts = "SELECT * FROM departments"
        this.showRoles = "SELECT * FROM roles"
        this.showEmployees = "SELECT * FROM employees"
        this.addDept = "INSERT INTO departments (dept_name) VALUES (?)"
        this.addRole = "INSERT INTO roles (job_title, salary) VALUES (?)" 
        this.addEmp = ""
        this.updateRole = "`UPDATE roles SET review = ? WHERE id = ?`"
    }
    query(x) {
        db.promise().query(x)
            .then( ([rows,fields]) => {
            console.table(rows);
            })
            .catch(console.log)
            // .then( () => db.end());
            
            .then( () => menuQuest());
    }
    updateQuery(sql, params) {
        db.promise().query(sql, params)
            .then( ([rows,fields]) => {
            console.table(rows);
            })
            .catch(console.log)
            .then( () => menuQuest());
    }
}

const q = new QueryFunction

function menuQuest() {
    inquirer.prompt(prompts.menuPrompts).then((data) => {
        switch (data.menuChoice) {
            case data.menuChoice = 'view all departments':
                q.query(q.showDepts)
                break
            case data.menuChoice = 'view all roles':
                console.log(data.menuChoice)
                q.query(q.showRoles)
                break
            case data.menuChoice = 'view all employees':
                console.log(data.menuChoice)
                q.query(q.showEmployees)
                break
            case data.menuChoice = 'add a department':
                console.log(data.menuChoice)
                addDept()
                break
            case data.menuChoice = 'add a role':
                console.log(data.menuChoice)
                addRole()
                break
            case data.menuChoice = 'add an employee':
                console.log(data.menuChoice)
                q.query(q.addEmp)
                break
            case data.menuChoice = 'update employee role':
                console.log(data.menuChoice)
                q.query(q.updateRole)
                break
            default: 
                console.log("no can do")
                break
        }
    })
}

function addDept() {
    inquirer.prompt(prompts.addDeptPrompts).then((data) => {
        q.updateQuery(q.addDept, data.deptName)
    })
}

function addRole() {
    inquirer.prompt(prompts.addRolePrompts).then((data) => {
        let params = []
        params.push(data.roleName, data.roleSalary)
        q.updateQuery(q.addRole, params)
    })
}

exports.menuQuest = menuQuest
exports.QueryFunction = QueryFunction
// exports.addDeptQuest = addDeptQuest