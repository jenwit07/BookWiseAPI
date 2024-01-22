"use strict";

/* jshint indent: 2 */
var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('products_at_stores', {
    store_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: {
          tableName: 'stores',
          schema: 'san_francisco'
        },
        key: 'stores_id'
      }
    },
    quantity_in_stock: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    isbn: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: {
          tableName: 'product',
          schema: 'san_francisco'
        },
        key: 'product_id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: {
          tableName: 'product',
          schema: 'san_francisco'
        },
        key: 'product_id'
      }
    }
  }, {
    sequelize: sequelize,
    tableName: 'products_at_stores',
    schema: 'san_francisco',
    timestamps: false,
    indexes: [{
      name: "products_at_stores_pkey",
      unique: true,
      fields: [{
        name: "store_id"
      }, {
        name: "product_id"
      }]
    }]
  });
};
//# sourceMappingURL=products_at_stores.js.map