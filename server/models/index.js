const Sequelize = require('sequelize');
const profile = require('./profile');

const sequelize = new Sequelize('studynow', 'root', 'H@rleythed0g', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    logging: false,
});

const Profiles = require('./profile')(sequelize);

sequelize.sync({ force: true, }); //hello
console.log('Tables synced successfully');

module.exports = {
    Profiles
};