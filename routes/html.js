var db = require("../models");
module.exports = function (app) {
    app.get("/add", function (req, res) {
        res.render("add")
    });

    app.get("/", function (req, res) {
        res.render("home")
    });

    app.get("/skills", function (req, res) {
        res.render("skills")
    });

    app.get("/employments", function (req, res) {
        res.render("employments")
    });

    app.get("/extracurriculars", function (req, res) {
        res.render("extracurriculars")
    });

    app.get("/projects", function (req, res) {
        res.render("projects")
    });

    app.get("/resume", function (req, res) {
        res.render("resume")
    });
}