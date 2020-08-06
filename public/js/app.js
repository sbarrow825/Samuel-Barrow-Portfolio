$(document).ready(function() {

    $("#addEmployment").on("click", function() {
        newEmployment = {
            jobTitle: $("#jobTitle").val().trim(),
            description: $("#Employmentdescription").val().trim(),
            timespan: $("#Employmenttimespan").val().trim()
        };
        $.ajax("/add/employment", {
            type: "POST",
            data: newEmployment
        }).then(function() {
            $("#jobTitle").val("");
            $("#Employmentdescription").val("");
            $("#Employmenttimespan").val("");
        });
    });

    $("#addSkill").on("click", function() {
        newSkill = {
            name: $("#name").val().trim(),
            description: $("#Skilldescription").val().trim()
        };
        $.ajax("/add/skill", {
            type: "POST",
            data: newSkill
        }).then(function() {
            $("#name").val("");
            $("#Skilldescription").val("");
        });
    });

    $("#addExtracurricular").on("click", function() {
        newExtracurricular = {
            title: $("#Roletitle").val().trim(),
            description: $("#Extracurriculardescription").val().trim(),
            timespan: $("#Extracurriculartimespan").val().trim()
        };
        $.ajax("/add/extracurricular", {
            type: "POST",
            data: newExtracurricular
        }).then(function() {
            $("#Roletitle").val("");
            $("#Extracurriculardescription").val("");
            $("#Extracurriculartimespan").val("");
        });
    });

    $("#addProject").on("click", function() {
        newProject = {
            title: $("#Projecttitle").val().trim(),
            description: $("#Projectdescription").val().trim(),
            githubLink: $("#github").val().trim()
        };
        $.ajax("/add/project", {
            type: "POST",
            data: newProject
        }).then(function() {
            $("#Projecttitle").val("");
            $("#Projectdescription").val("");
            $("#github").val("");
        });
    });

    $("#addResponsibility").on("click", function() {
        newResponsibility = {
            responsibility: $("#responsibility").val().trim(),
            EmploymentId: $("#EmploymentsId").val().trim(),
            ExtracurricularId: $("#ExtracurricularsId").val().trim(),
            ProjectId: $("#ProjectsId").val().trim()
        };
        $.ajax("/add/responsibility", {
            type: "POST",
            data: newResponsibility
        }).then(function() {
            $("#responsibility").val("");
            $("#EmploymentsId").val("");
            $("#ExtracurricularsId").val("");
            $("#ProjectsId").val("");
        });
    });

    $("#Employment-Skills-Association").on("click", function (req, res) {
        newAssociation = {
            EmploymentId: $("#EmploymentAssociationId").val().trim(),
            SkillId: $("#EmploymentSkillsAssociationId").val().trim()
        };
        $.ajax("add/employment-skill", {
            type: "POST",
            data: newAssociation
        }).then(function() {
            $("#EmploymentAssociationId").val("");
            $("#EmploymentSkillsAssociationId").val("");
        });
    });

    $("#Project-Skills-Association").on("click", function (req, res) {
        newAssociation = {
            ProjectId: $("#ProjectAssociationId").val().trim(),
            SkillId: $("#ProjectSkillsAssociationId").val().trim()
        };
        $.ajax("add/project-skill", {
            type: "POST",
            data: newAssociation
        }).then(function() {
            $("#ProjectAssociationId").val("");
            $("#ProjectSkillsAssociationId").val("");
        });
    });

    $("#Extracurricular-Skills-Association").on("click", function (req, res) {
        newAssociation = {
            ExtracurricularId: $("#ExtracurricularAssociationId").val().trim(),
            SkillId: $("#ExtracurricularSkillsAssociationId").val().trim()
        };
        $.ajax("add/extracurricular-skill", {
            type: "POST",
            data: newAssociation
        }).then(function() {
            $("#ExtracurricularAssociationId").val("");
            $("#ExtracurricularSkillsAssociationId").val("");
        });
    });
})