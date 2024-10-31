const { Sequelize } = require("sequelize");
const connection = new Sequelize("alocacaocelular", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
