const { DataTypes, Sequelize } = require("sequelize");
const connection = require("./database");

const Celular = connection.define('Celular',{
        id_celular: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        preco: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
    },
      {
        tableName: 'celular',
        timestamps: false,
      }
    );
    
      async function sincronizarCelular() {
        try {
          await Celular.sync({ force: false });
        } catch (error) {
          console.error("Erro ao sincronizar a tabela: ", error);
        } finally {
          await connection.close();
          console.log("Conexão fechada.");
        }
      }
      
    
      module.exports = Celular;


    