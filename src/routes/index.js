const express = require('express');
const router = express.Router();

// Exemplo de rota de teste
router.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

module.exports = router;
