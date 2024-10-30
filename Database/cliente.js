const { DataTypes, Sequelize } = require("sequelize");
const connection = require("./database");

const Cliente = connection.define('Cliente',{
        id_cliente: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
    },
      {
        tableName: 'cliente',
        timestamps: false,
      }
    );
    
      async function sincronizarCliente() {
        try {
          await Cliente.sync({ force: false });
        } catch (error) {
          console.error("Erro ao sincronizar a tabela: ", error);
        } finally {
          await connection.close();
          console.log("Conexão fechada.");
        }
      }
      
    
      module.exports = Cliente;


    