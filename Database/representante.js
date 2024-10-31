const { DataTypes, Sequelize } = require("sequelize");
const connection = require("./database");

const Representante = connection.define('Representante',{
        id_Representante: {
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
        tableName: 'representante',
        timestamps: false,
      }
    );
    
      async function sincronizarRepresentante() {
        try {
          await Representante.sync({ force: false });
        } catch (error) {
          console.error("Erro ao sincronizar a tabela: ", error);
        } finally {
          await connection.close();
          console.log("Conexão fechada.");
        }
      }
      
    
      module.exports = Representante;


    