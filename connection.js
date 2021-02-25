const sql = require("mssql-plus");

var config = {
  user: "hasl",
  password: "admin",
  server: "localhost",
  database: "mi_inversion",
};
sql.close();

sql.connect(config, function (err) {
  if (err) console.log(err);
});

const request = new sql.Request();

module.exports = request;
