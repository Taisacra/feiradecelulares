const Celular = require('../Database/celular');
const Alocacao = require('../Database/alocacao');

exports.getDetalhesArea = async (req, res) => {
  try {
    // Obtém a área específica pelo ID passado na URL
    const areaId = req.params.areaId;
    const area = await Alocacao.findByPk(areaId);

    // Obtém os celulares relacionados à área
    const celulares = await Celular.findAll();

    // Renderiza a página com detalhes da área e lista de celulares
    res.render('detalhesArea', { area, celulares });
  } catch (error) {
    console.error("Erro ao obter detalhes da área:", error);
    res.status(500).send("Erro ao carregar os detalhes da área");
  }
};
