'use strict';
const {
  Model
} = require('sequelize');
/**
 * Exporta uma classe `User` que herda de `Model`.
 * Essa classe representa a tabela `users` no banco de dados.
 * O método `associate` não faz parte do ciclo de vida do Sequelize.
 * O arquivo `models/index` chamar  esse método automaticamente.
 *
 * @param {Sequelize} sequelize - Instância do Sequelize.
 * @param {DataTypes} DataTypes - Instância do Sequelize.DataTypes.
 * @returns {User} - A classe `User`.
 */
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * O arquivo `models/index` chamar  esse m todo automaticamente.
     */
    static associate(models) {
      // TODO : definir as associações aqui
    }
  }
  User.init({
    firstname: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};