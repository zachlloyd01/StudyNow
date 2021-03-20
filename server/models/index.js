const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { 
    // Connect to the DB with these options
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    logging: false, // Do not log every SQL update to the console
});

const Profiles = require('./profile')(sequelize);
const Students = require('./student')(sequelize);
const Tutors = require('./tutor')(sequelize);
const Sessions = require('./session')(sequelize);

Profiles.hasMany(Students); // A profile can have an inifinite number of attached students
Students.belongsTo(Profiles); // A student can only belong to one profile

Tutors.belongsTo(Profiles); // A tutor must belong to a profile

Tutors.hasMany(Sessions); // A tutor can have a bunch of sessions
Students.hasMany(Sessions); // A student can have a bunch of sessions

sequelize.sync({ force: false, });
console.log('Tables synced successfully');

module.exports = {
    Profiles,
    Students,
    Tutors,
    Sessions
};