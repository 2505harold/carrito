const mysql = require("mysql");
const { mySql } = require("../config");
const { promisify } = require("util");

const pool = mysql.createPool(mySql);
pool.getConnection((err, connection) => {
  if (err) {
    switch (err.code) {
      case "PROTOCOL_CONNECTION_LOST":
        console.log("database was closed"); break;
      case "ER_CON_COUNT_ERROR":
        console.log("database has to many connections"); break;
      case "ECONNREFUSED":
        console.log("database connection was refusedd"); break;
      case "ER_ACCESS_DENIED_ERROR":
        console.log("Access denied for user");  break;
    }
  }
  if (connection) {
    console.log("database is connected");
  }
});

pool.query = promisify(pool.query);

module.exports = pool;
