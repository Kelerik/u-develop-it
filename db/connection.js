const mysql = require("mysql2");

// connect to database
const db = mysql.createConnection(
   {
      host: "localhost",
      user: "root",
      password: "J6ordbtRZNaMZvu8Ap2M",
      database: "election",
   },
   console.log("Connected to the election database")
);
module.exports = db;
