module.exports = function (sequelize, DataTypes) {
    var Extracurriculars = sequelize.define("Extracurriculars", {
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
        timespan: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
    });

    Extracurriculars.associate = function(models) {
        Extracurriculars.belongsToMany(models.Skills, {through: "Extracurriculars_Skills"});
        Extracurriculars.hasMany(models.Responsibilities);
    };

    return Extracurriculars;
};