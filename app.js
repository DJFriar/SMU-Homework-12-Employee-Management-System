// Definitions
const express = require("express");
const path = require("path");
const inquirer = require("inquirer");


// Express Configuration
var app = express();
var PORT = process.env.PORT || 3500;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("private"));

// Routes
require("./private/routes")(app);

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

// Inquirer
const cmsMain = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'actionChoice',
      message: 'What would you like to do?',
      choices: ["View All Employees", "View All Departments", "View All Roles", "Exit Application"]
    },
  ])
  .then((res) => {
    switch (res.newEmployeeType) {
      case "View All Employees":
        console.log("View Employees");
        cmsMain();
      break;
      case "View All Departments":
        console.log("View Departments");
        cmsMain();
      break;
      case "View All Roles":
        console.log("View Roles");
        cmsMain();
      break;
      default:
      break;
    }
  });
};

cmsMain();