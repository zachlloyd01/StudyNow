const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    const Session = sequelize.define('Session', {
        date: {
            type: DataTypes.DATE
        }

      });

      return Session;
}
