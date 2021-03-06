const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    const Profile = sequelize.define('Profile', {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        refreshToken: {
          type: DataTypes.STRING,
          allowNull: true
        }
      });
      return Profile;
}
