'use strict';
const {
  Model
} = require('sequelize');
/**
 * Exporta uma classe `Category` que herda de `Model`.
 * Essa classe representa uma tabela `categories` no banco de dados.
 * O método `associate` não faz parte do ciclo de vida do Sequelize.
 * O arquivo `models/index` chamar  esse método automaticamente.
 *
 * @param {Sequelize} sequelize - Instância do Sequelize.
 * @param {DataTypes} DataTypes - Instância do Sequelize.DataTypes.
 * @returns {Category} - A classe `Category`.
 */
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {

    static associate(models) {
      // define association here
    }
  }
  Category.init({
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    use_in_menu: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};