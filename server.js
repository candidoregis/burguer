// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");

// EXPRESS CONFIG
var app = express();
var PORT = process.env.PORT || 3100;

// MIDDLEWARE
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// HANDLEBARS
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// ROUTES
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// STARTING THE SERVER
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});