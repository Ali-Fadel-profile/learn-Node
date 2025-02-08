const mySql = require("mysql2");

const pool = mySql.createPool({
    host: "localhost",
    user: "root",
    password: "ja#lsdfjfas", // this is not the real password the real one is the one you usually use.
    database: "node-complete",
});

module.exports = pool.promise();