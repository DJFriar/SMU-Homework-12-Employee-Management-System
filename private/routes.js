const path = require("path");
const fs = require("fs");
const mysql = require("mysql");
const cTable = require('console.table');

module.exports = function(app) {

  // MySQL DB Connection Information
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employee_cms_db"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

  // ===============================================================================
  // API ROUTES
  // ===============================================================================

  // GET Requests
  app.get("/all-employees", function(req, res) {
    connection.query("SELECT * FROM employee", function(err, res) {
      if (err) throw err;
      console.table(res);
    });
  });

  app.get("/all-departments", function(req, res) {
    connection.query("SELECT * FROM department", function(err, res) {
      if (err) throw err;
      console.table(res);
    });
  });

  app.get("/all-roles", function(req, res) {
    connection.query("SELECT * FROM role", function(err, res) {
      if (err) throw err;
      console.table(res);
    });
  });

  // API POST Requests


  // ===============================================================================
  // TEST USE ONLY
  // ===============================================================================

  app.get("*", function(req, res) {
    connection.query("SELECT 1", function(err, result) {
      if (err) throw err;
      var html = "<h1> Choose one of the following to test:</h1>";
      html += "<ul>";
      html += "<li><p><a href='/all-employees'>View All Employees</a></p>";
      html += "<li><p><a href='/all-departments'>View All Departments</a></p>";
      html += "<li><p><a href='/all-roles'>View All Roles</a></p>";
      html += "<li><p><a href='/all-departments'>Future Use</a></p>";
      html += "</ul>";
      res.send(html);
    });
  });

};

// Functions
function quitApplication() {
  connection.end();
}

