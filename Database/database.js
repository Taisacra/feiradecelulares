const { Sequelize } = require("sequelize");
const connection = new Sequelize("feiracelulares", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
