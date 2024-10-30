const express = require('express')
const app = express();
const port = 3600;
const connection = require("./Database/database");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

const Cliente = require("./Database/cliente");
const Celular= require("./Database/celular");
const Representante = require("./Database/representante");
const Alocacao = require("./Database/alocacao");


//TESTANDO A CONEXÃO 
const start = async () =>{
    try {
        await connection.authenticate();
        console.log("Conexão estabelecida com sucesso.");
        await connection.sync({force: false});
        console.log("Tabelas sicronizadas.");
    } catch (error) {
        console.error("Não foi possivel conectar ao banco de dados: ", error)
    }
};

start();


/*app.get("/cliente", (req, res) => {
    Cliente. findAll({
      raw: true,
      order: [
        ["id_cliente", "DESC"], // ASC = Crescente || DESC = Decrescente
      ],
    }).then((clientes) => {
      res.render("cad_cliente", {
        clientes: clientes,
      });
    });
  });*/

  app.get("/celular", (req, res) => {
    Celular. findAll({
      raw: true,
      order: [
        ["id_celular", "DESC"], // ASC = Crescente || DESC = Decrescente
      ],
    }).then((celulares) => {
      res.render("cad_celular", {
        ccelulares: celulares,
      });
    });
  });













app.listen(port, ()=>{
    console.log(`A aplicação está rodando ${port}`);
});
  