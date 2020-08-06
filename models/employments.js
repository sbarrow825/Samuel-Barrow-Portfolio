module.exports = function (sequelize, DataTypes) {
    var Employments = sequelize.define("Employments", {
        jobTitle: {
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

    Employments.associate = function(models) {
        Employments.belongsToMany(models.Skills, {through: "Employments_Skills"});
        Employments.hasMany(models.Responsibilities);
    };

    return Employments;
};