"use strict";

/* jshint indent: 2 */
var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('books_by_category', {
    category_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: {
          tableName: 'categories',
          schema: 'san_francisco'
        },
        key: 'category_id'
      }
    },
    isbn: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: {
          tableName: 'books',
          schema: 'san_francisco'
        },
        key: 'isbn'
      }
    }
  }, {
    sequelize: sequelize,
    tableName: 'books_by_category',
    schema: 'san_francisco',
    timestamps: false,
    indexes: [{
      name: "books_by_category_pkey",
      unique: true,
      fields: [{
        name: "category_id"
      }, {
        name: "isbn"
      }]
    }]
  });
};
//# sourceMappingURL=books_by_category.js.map