const { DataTypes, Sequelize } = require("sequelize");
const connection = require("./database");

const Representantes = connection.define('Representantes',{
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
        tableName: 'representantes',
        timestamps: false,
      }
    );
    
      async function sincronizarRepresentantes() {
        try {
          await Representantes.sync({ force: false });
        } catch (error) {
          console.error("Erro ao sincronizar a tabela: ", error);
        } finally {
          await connection.close();
          console.log("Conexão fechada.");
        }
      }
      
    
      module.exports = Representantes;


    