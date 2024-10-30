const { DataTypes, Sequelize } = require("sequelize");
const connection = require("./database");
const Representante = require("./representante");
const Celular = require("./celular")

const Alocacao = connection.define('Alocacao',{
        id_alocacao: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        area: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        id_alocacao_celular: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references:{
            model: Celular,
            key: "id_celular",
          },
        },
        id_alocacao_representante: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
              model: Representante,
              key: "id_representante",
            },
          },
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
    },
      {
        tableName: 'Alocacao',
        timestamps: false,
      }
    );
    
      async function sincronizarAlocacao() {
        try {
          await Alocacao.sync({ force: false });
        } catch (error) {
          console.error("Erro ao sincronizar a tabela: ", error);
        } finally {
          await connection.close();
          console.log("Conexão fechada.");
        }
      }
      
    
      module.exports = Alocacao;


    