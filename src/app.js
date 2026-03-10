require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

// Middlewares
require('./middleware')(app);

module.exports = app;