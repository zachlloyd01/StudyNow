const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    const Student = sequelize.define('Student', {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false
        },
      });

      return Student;
}
