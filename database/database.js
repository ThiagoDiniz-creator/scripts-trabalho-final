const Sequelize = require("sequelize");

const database = "follow";
const user = "root";
const password = "";

const connection = new Sequelize(database, user, password, {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00",
});
 
connection.sync();
 
module.exports = { 
  connection
};
