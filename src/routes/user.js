const express = require('express');
const router = express.Router();
const { User } = require('../../models');

// GET /v1/user/:id - Buscar usuário por ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: ['id', 'firstname', 'surname', 'email']
    });
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar usuário' });
  }
});

// POST /v1/user - Cadastro de usuário
router.post('/', async (req, res) => {
  const { firstname, surname, email, password, confirmPassword } = req.body;
  if (!firstname || !surname || !email || !password || password !== confirmPassword) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }
  try {
    const bcrypt = require('bcrypt');
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ firstname, surname, email, password: hash });
    res.status(201).json({ id: user.id, firstname, surname, email });
  } catch (err) {
    res.status(400).json({ message: 'Erro ao cadastrar usuário' });
  }
});

module.exports = router;
