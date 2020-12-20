// Definitions
var express = require("express");
var path = require("path");

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