// routes used for adding info to the Portfolio db

var db = require("../models");
module.exports = function (app) {
    app.post("/add/employment", function (req, res) {
        console.log("adding new employment")
        newEmployment = {
            jobTitle: req.body.jobTitle,
            description: req.body.description,
            timespan: req.body.timespan
        };
        db.Employments.create(newEmployment)
        .then(function(data) {
            res.json(data);
        })
    })

    app.post("/add/skill", function (req, res) {
        newSkill = {
            name: req.body.name,
            description: req.body.description 
        };
        db.Skills.create(newSkill)
        .then(function(data) {
            res.json(data);
        })
    })

    app.post("/add/extracurricular", function(req, res) {
        newExtracurricular = {
            title: req.body.title,
            description: req.body.description,
            timespan: req.body.timespan
        };
        db.Extracurriculars.create(newExtracurricular)
        .then(function(data) {
            res.json(data);
        });
    });

    app.post("/add/project", function(req, res) {
        newProject = {
            title: req.body.title,
            description: req.body.description,
            githubLink: req.body.githubLink
        };
        db.Projects.create(newProject)
        .then(function(data) {
            res.json(data);
        });
    });

    app.post("/add/responsibility", function(req, res) {
        newResponsibility = {
            responsibility: req.body.responsibility,
            EmploymentId: req.body.EmploymentId || null,
            ExtracurricularId: req.body.ExtracurricularId || null,
            ProjectId: req.body.ProjectId || null
        };
        db.Responsibilities.create(newResponsibility)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            console.log(err);
        });
    });
}