const express = require('express');
const { getAreas } = require('../controllers/AlocacaoController');
const router = express.Router();

router.get('/', getAreas);

module.exports = router;
