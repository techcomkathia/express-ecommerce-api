require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

// Middlewares (adicione outros conforme necessário)
// require('./middleware')(app);

// Rotas principais
const mainRoutes = require('./routes');
app.use('/v1', mainRoutes);

module.exports = app;