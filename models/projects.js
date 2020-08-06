module.exports = function (sequelize, DataTypes) {
    var Projects = sequelize.define("Projects", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        githubLink: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        }
    });

    Projects.associate = function(models) {
        Projects.belongsToMany(models.Skills, {through: "Projects_Skills"});
        Projects.hasMany(models.Responsibilities);
    };

    return Projects;
};