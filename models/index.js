'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
// Carrega as configurações do banco de dados a partir do arquivo config.js
const config = require(path.join(__dirname, '/../config/config.js'))[env];
// Objeto que irá armazenar todas as models e a conexão
const db = {};

/**
 * Este arquivo é responsável por carregar as models do banco de dados.
 * Ele lê o diretório atual e carrega todos os arquivos com extensão .js,
 * exceto o próprio arquivo (models/index.js) e os arquivos de teste (arquivos
 * que contenham .test.js).
 * Em seguida, ele instancia um objeto Sequelize com as configurações
 * do banco de dados especificadas no arquivo config/config.json.
 * Por fim, ele atribui as models carregadas ao objeto db.
 */

// Cria a conexão com o banco de dados
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// Carrega todas as models do diretório atual
fs.readdirSync(__dirname)
  .filter(file => (
    file.indexOf('.') !== 0 && // Ignora arquivos ocultos
    file !== basename && // Ignora este próprio arquivo
    file.slice(-3) === '.js' && // Apenas arquivos .js
    !file.endsWith('.test.js') // Ignora arquivos de teste
  ))
  .forEach(file => {
    // Importa a model e adiciona ao objeto db
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Se a model tiver o método associate, executa para definir relações
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Exporta o objeto db, a conexão e o Sequelize
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
