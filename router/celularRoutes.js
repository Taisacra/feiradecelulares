const express = require('express');
const router = express.Router();
const { getDetalhesArea } = require('../controllers/CelularController');

// Define uma rota para exibir os detalhes da área e os celulares
router.get('/detalhes/:areaId', getDetalhesArea);

router.post('/vender/:celularId', async (req, res) => {
  const celularId = req.params.celularId;
  try {
    // Lógica para marcar o celular como vendido (ex: remover do banco ou atualizar status)
    await Celular.destroy({ where: { id: celularId } });
    res.redirect('back'); // Redireciona para a página anterior após a venda
  } catch (error) {
    console.error("Erro ao vender celular:", error);
    res.status(500).send("Erro ao vender o celular");
  }
});

module.exports = router;
