const Sequelize = require('sequelize');
const profile = require('./profile');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    logging: false,
});

const Profiles = require('./profile')(sequelize);

sequelize.sync({ force: false, });
console.log('Tables synced successfully');

module.exports = {
    Profiles
};