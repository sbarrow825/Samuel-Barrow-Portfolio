module.exports = function (sequelize, DataTypes) {
    var Skills = sequelize.define("Skills", {
        name: {
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
        }
    });

    Skills.associate = function(models) {
        Skills.belongsToMany(models.Employments, {through: "Employments_Skills"})
        Skills.belongsToMany(models.Extracurriculars, {through: "Extracurriculars_Skills"});
        Skills.belongsToMany(models.Projects, {through: "Projects_Skills"});
    };

    return Skills;
};