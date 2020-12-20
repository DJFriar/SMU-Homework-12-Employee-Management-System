var path = require("path");
var fs = require("fs");
var mysql = require("mysql");

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
      console.log(res);
      // TODO: push results to console using console.table
    });
  });

  app.get("/all-departments", function(req, res) {
    connection.query("SELECT * FROM department", function(err, res) {
      if (err) throw err;
      console.log(res);
      // TODO: push results to console using console.table
    });
  });

  app.get("/all-roles", function(req, res) {
    connection.query("SELECT * FROM role", function(err, res) {
      if (err) throw err;
      console.log(res);
      // TODO: push results to console using console.table
    });
  });

  // API POST Requests

};
