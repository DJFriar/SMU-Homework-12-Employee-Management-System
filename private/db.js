const mysql = require("mysql");

// MySQL DB Connection Information
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employee_cms_db"
});

module.exports = {connection}