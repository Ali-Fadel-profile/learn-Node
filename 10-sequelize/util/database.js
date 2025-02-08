const Sequelize = require("sequelize");
const sequelize = new Sequelize("node-complete", "root", "ja#lsdfjfas", // this is not the real password the real one is the one you usually use.
    {
        dialect: "mysql",
        host: "localhost"
    });

module.exports = sequelize;