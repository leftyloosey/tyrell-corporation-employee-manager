const menuPrompts = [
    {
    type: 'list',
    name: 'menuChoice',
    message: 'do stuff?',
    choices: ['view all departments',
                'view all roles',
                'view all employees',
                'add a department',
                'add a role',
                'add an employee',
                'update employee role',
                'delete a department',
                'delete a role',
                'delete an employee',
                'show employees by department',
                'quit'
            ]
    }
]

const addDeptPrompts = [
    {
        type: "input",
        name: "deptName",
        message: "department name?"
        
    },
]

const addRolePrompts = [
    {
        type: "input",
        name: "roleName",
        message: "name of new role?"
        
    },
    {
        type: "input",
        name: "roleSalary",
        message: "and its new salary?"
        
    },
    {
        type: "input",
        name: "deptId",
        message: "department ID?"
        
    },
]

const addEmpPrompts = [
    {
        type: "input",
        name: "firstName",
        message: "employee's first name?"
        
    },
    {
        type: "input",
        name: "lastName",
        message: "last name?"
        
    },
    {
        type: "input",
        name: "roleId",
        message: "role ID?"
        
    },
    {
        type: "input",
        name: "managerId",
        message: "manager ID?"
        
    },
]
const updateRolePrompts = [
    {
        type: "input",
        name: "qNewId",
        message: "role number to update?"
        
    },
    {
        type: "input",
        name: "newTitle",
        message: "new title?"
        
    },
    {
        type: "input",
        name: "newSalary",
        message: "new salary?"
        
    },
    {
        type: "input",
        name: "newId",
        message: "new department ID?"
        
    }
]
const deleteDeptPrompts = [
    {
        type: "input",
        name: "delDept",
        message: "department number to delete?"
        
    },
]
const deleteRolePrompts = [
    {
        type: "input",
        name: "delRole",
        message: "role number to delete?"
        
    },
]
const deleteEmpPrompts = [
    {
        type: "input",
        name: "delEmp",
        message: "employee number to delete?"
        
    },
]


exports.menuPrompts = menuPrompts
exports.addDeptPrompts = addDeptPrompts
exports.addRolePrompts = addRolePrompts
exports.addEmpPrompts = addEmpPrompts
exports.updateRolePrompts = updateRolePrompts
exports.deleteDeptPrompts = deleteDeptPrompts
exports.deleteRolePrompts = deleteRolePrompts
exports.deleteEmpPrompts = deleteEmpPrompts