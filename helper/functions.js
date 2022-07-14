const inquirer = require("inquirer")
const prompts = require("/Users/davidhardin/Desktop/ch/ch12b/prompts/prompts")
const cTable = require('console.table')
const { db } = require("/Users/davidhardin/Desktop/ch/ch12b/db/connection.js")


class QueryFunction {
    constructor() {
        this.showTables = "SHOW TABLES"
        this.showDepts = "SELECT * FROM departments"
        this.showRoles = "SELECT * FROM roles"
        this.showEmployees = "SELECT * FROM employees"
        this.addDept = "INSERT INTO departments (dept_name) VALUES (?)"
        this.addRole = "INSERT INTO roles (job_title, salary, dept_id) VALUES (?,?,?)" 
        this.addEmp = "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)"
        this.updateRole = `UPDATE roles SET job_title = ?, salary = ?, dept_id= ? WHERE id = ?`
        this.deleteDept = `DELETE FROM departments WHERE id = ?`
        this.deleteRole = `DELETE FROM roles WHERE id = ?`
        this.deleteEmp = `DELETE FROM employees WHERE id = ?`
        this.showByDept =  `SELECT employees.first_name, last_name as employee_name, departments.dept_name as department 
                            FROM employees JOIN departments ON departments.id = employees.id`

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
            // .then( () => menuQuest());
    }
    showQuery(x) {
        db.promise().query(x)
            .then( ([rows,fields]) => {
            console.table(rows);
            })
            .catch(console.log)
            // .then( () => db.end());
            
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
                // q.query(q.showDepts)
                break
            case data.menuChoice = 'add a role':
                console.log(data.menuChoice)
                addRole()
                // q.query(q.showRoles)
                break
            case data.menuChoice = 'add an employee':
                console.log(data.menuChoice)
                addEmp()
                // q.query(q.showEmployees)
                break
            case data.menuChoice = 'update employee role':
                console.log(data.menuChoice)
                updateRole()
                // q.query(q.showEmployees)
                break

            case data.menuChoice = 'delete a department':
                console.log(data.menuChoice)
                deleteDept()
                // q.query(q.showDepts)
                break
            case data.menuChoice = 'delete a role':
                console.log(data.menuChoice)
                deleteRole()
                // q.query(q.showRoles)
                break
            case data.menuChoice = 'delete an employee':
                console.log(data.menuChoice)
                deleteEmp()
                // q.query(q.showEmployees)
                break
            case data.menuChoice = 'show employees by department':
                console.log(data.menuChoice)
                q.query(q.showByDept)
                break
            case data.menuChoice = 'show total department budget':
                console.log(data.menuChoice)
                //
                break
            case data.menuChoice = 'quit':
                console.log(data.menuChoice)
                process.exit(0)
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
        q.showQuery(q.showDepts)
    })
}

function addRole() {
    inquirer.prompt(prompts.addRolePrompts).then((data) => {
        let params = []
        params.push(data.roleName, data.roleSalary, data.deptId)
        
        q.updateQuery(q.addRole, params)
        q.showQuery(q.showRoles)
    })
}

function addEmp() {
    inquirer.prompt(prompts.addEmpPrompts).then((data) => {
        let params = []
        params.push(data.firstName, data.lastName, data.roleId, data.managerId)
        
        q.updateQuery(q.addEmp, params)
        q.showQuery(q.showEmployees)
    })
}

function updateRole() {
    inquirer.prompt(prompts.updateRolePrompts).then((data) => {
        let params = []
        params.push(data.newTitle, data.newSalary, data.newId, data.qNewId)
        
        q.updateQuery(q.updateRole, params)
        q.showQuery(q.showRoles)
    })
}

//

function deleteDept() {
    inquirer.prompt(prompts.deleteDeptPrompts).then((data) => {
        q.updateQuery(q.deleteDept, data.delDept)
        q.showQuery(q.showDepts)
    })
}

function deleteRole() {
    inquirer.prompt(prompts.deleteRolePrompts).then((data) => {
        q.updateQuery(q.deleteRole, data.delRole)
        q.showQuery(q.showRoles)
    })
}

function deleteEmp() {
    inquirer.prompt(prompts.deleteEmpPrompts).then((data) => {
        q.updateQuery(q.deleteEmp, data.delEmp)
        q.showQuery(q.showEmployees)
    })
}

exports.menuQuest = menuQuest
