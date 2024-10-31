const express = require('express');
const app = express();
const port = 3600;
const connection = require("./Database/database");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

const Cliente = require("./Database/cliente");
const celularRoutes = require("./router/celularRoutes");
const Representante = require("./Database/representante");
const Alocacao = require("./Database/alocacao"); // Importa o modelo de Alocação

// TESTANDO A CONEXÃO
const start = async () => {
  try {
    await connection.authenticate();
    console.log("Conexão estabelecida com sucesso.");
    await connection.sync({ force: false });
    console.log("Tabelas sincronizadas.");
  } catch (error) {
    console.error("Não foi possível conectar ao banco de dados: ", error);
  }
};

start();

// Endpoint para renderizar a página com as áreas de alocação
app.get('/pagina', async (req, res) => {
  try {
    // Busca todas as alocações no banco de dados
    const areas = await Alocacao.findAll();

    // Renderiza a página com as áreas, verificando a ocupação com base na quantidade
    res.render('TelaInicial', { 
      areas: areas.map(area => ({
        id: area.id_alocacao,
        numero: area.area,
        ocupacao: area.quantidade > 0 // Se quantidade > 0, está ocupada
      }))
    });
  } catch (error) {
    console.error("Erro ao buscar as áreas: ", error);
    res.status(500).send("Erro ao carregar a página");
  }
});
app.use('/celulares', celularRoutes);
// Inicializa o servidor
app.listen(port, () => {
  console.log(`A aplicação está rodando na porta ${port}`);
});
