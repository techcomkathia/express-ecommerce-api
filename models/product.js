'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
   
    static associate(models) {
      // define association aqui
    }
  }
  Product.init({
    enabled: DataTypes.BOOLEAN,
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    use_in_menu: DataTypes.BOOLEAN,
    stock: DataTypes.INTEGER,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    price_with_discount: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};