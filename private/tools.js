const db = require("./db");
const inquirer = require("inquirer");

function viewAllEmployees() { 
  db.connection.query("SELECT * FROM employee", function(err, res) {
    if (err) throw err;
    console.table(res);
    cmsMain();
  });

};

function viewAllDepartments() {
  db.connection.query("SELECT * FROM department", function(err, res) {
    if (err) throw err;
    console.table(res);
    cmsMain();
  });
};

function viewAllRoles() {
  db.connection.query("SELECT * FROM role", function(err, res) {
    if (err) throw err;
    console.table(res);
    cmsMain();
  });
};

function quitApplication() {
  db.connection.end();
  console.log("Application Terminated");
};

// Inquirer
function cmsMain() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'actionChoice',
      message: 'What would you like to do?',
      choices: ["View All Employees", "View All Departments", "View All Roles", "Exit Application"]
    },
  ])
  .then(function (res) {
    switch (res.actionChoice) {
      case "View All Employees":
        viewAllEmployees();
        break;
      case "View All Departments":
        viewAllDepartments();
        break;
      case "View All Roles":
        viewAllRoles();
        break;
      default:
        quitApplication();
        break;
    }
  });
};

module.exports = {viewAllDepartments, viewAllEmployees, viewAllRoles, quitApplication, cmsMain};