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
                'update employee role'
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
]


exports.menuPrompts = menuPrompts
exports.addDeptPrompts = addDeptPrompts
exports.addRolePrompts = addRolePrompts