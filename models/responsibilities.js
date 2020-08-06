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
                allowNull: false
            }
        });
        Responsibilities.belongsTo(models.Extracurriculars, {
            foreignKey: {
                allowNull: false
            }
        });
        Responsibilities.belongsTo(models.Projects, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Responsibilities;
};