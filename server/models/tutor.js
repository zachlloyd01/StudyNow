const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    const Tutor = sequelize.define('Tutor', {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        blurb: {
            type: DataTypes.TEXT('medium'),
            allowNull: false,
        },
        bio: {
            type: DataTypes.TEXT('long'),
            allowNull: true,
        }

      });

      return Tutor;
}
