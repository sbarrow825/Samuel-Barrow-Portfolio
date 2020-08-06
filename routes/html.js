var db = require("../models");
module.exports = function (app) {
    app.get("/add", function (req, res) {
        res.render("add")
    });

    app.get("/", function (req, res) {
        res.render("home")
    });

    app.get("/skills", function (req, res) {
        db.Skills.findAll({include: [db.Extracurriculars, db.Employments, db.Projects]})
        .then(function(data) {
            Skills = {
                Skills: data
            };
            res.render("skills", Skills)
        });
    });

    app.get("/employments", function (req, res) {
        db.Employments.findAll({include: [db.Skills, db.Responsibilities]})
        .then(function(data) {
            Employments = {
                Employments: data
            };
            res.render("employments", Employments)
        });
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