var express = require("express");
var fs = require("fs");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// require routes here
require("./routes/add.js")(app);
require("./routes/html.js")(app);

const db = require("./models");

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on: http://localhost:" + PORT);
    });
});