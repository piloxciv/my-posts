const { createPool } = require("mysql");
/* Connection Pool creation - Start */
const db = createPool({
  port: "3306",
  host: "us-cdbr-east-05.cleardb.net",
  user: "bd5c9ebd92b52f",
  password: "080293ba",
  database: "heroku_b9d02b5a8ac7793",
  connectionLimit: 10,
});

/* Connection pool creation - END */

module.exports = db;

