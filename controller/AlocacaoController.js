const Alocacao = require('../models/Alocacao');

exports.getAreas = async (req, res) => {
  const areas = await Alocacao.findAll();
  
  // Atualiza a ocupação com base na quantidade disponível
  const areasAtualizadas = areas.map(area => {
    area = area.toJSON(); // Converte o modelo para JSON para facilitar o uso no EJS
    area.disponivel = area.quantidade > 0; // Define a disponibilidade
    return area;
  });

  res.render('areas', { areas: areasAtualizadas });
};
