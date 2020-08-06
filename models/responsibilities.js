module.exports = function (sequelize, DataTypes) {
    var Responsibilities = sequelize.define("Responsibilities", {
        responsibility: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        }
    });

    Responsibilities.associate = function(models) {
        Responsibilities.belongsTo(models.Employments, {
            foreignKey: {
                allowNull: true
            }
        });
        Responsibilities.belongsTo(models.Extracurriculars, {
            foreignKey: {
                allowNull: true
            }
        });
        Responsibilities.belongsTo(models.Projects, {
            foreignKey: {
                allowNull: true
            }
        });
    };

    return Responsibilities;
};