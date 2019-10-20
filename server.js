// DEPENDENCIES
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

// EXPRESS CONFIG
var app = express();
var PORT = process.env.PORT || 3100;

// MIDDLEWARE
app.use(express.static(path.join(__dirname, "public/"), {maxAge: 3456700000})); 
app.use(express.json());
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


// ROUTES
require("./controllers/burgers_controller.js")(app);

// STARTING THE SERVER
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});