const mysql = require("mysql2");

const config = {
  host: "mysql",          // service name from docker-compose
  user: "appuser",
  password: "rootpass",
  database: "shopdb"
};

function connectWithRetry() {
  const db = mysql.createConnection(config);

  db.connect(err => {
    if (err) {
      console.error("MySQL not ready... retrying in 5 seconds");
      setTimeout(connectWithRetry, 5000);
    } else {
      console.log("MySQL Connected");
      module.exports = db;
    }
  });
}

connectWithRetry();
