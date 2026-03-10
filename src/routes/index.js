const express = require('express');
const router = express.Router();


// Rotas de usuário
const userRoutes = require('./user');
router.use('/user', userRoutes);

// Exemplo de rota de teste
router.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

module.exports = router;
