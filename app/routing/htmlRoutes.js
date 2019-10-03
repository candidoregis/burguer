var path = require("path");

module.exports = function(app) {
	// GET ROUTE THAT WILL RETURN THE SURVEY HTML FILE, EITHER BY CLICKING ON THE BUTTON OR ADDING ON THE URL
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	// FALLBACK ROUTE TO HOMEPAGE
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};