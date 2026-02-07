const mysql = require("mysql2");

const db = mysql.createPool({
  host: "mysql",          // docker service name
  user: "appuser",
  password: "rootpass",
  database: "shopdb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test DB connection once on startup
db.query("SELECT 1", (err) => {
  if (err) {
    console.error("MySQL Connection Failed:", err);
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = db;
