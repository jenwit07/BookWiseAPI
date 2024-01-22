"use strict";

/* jshint indent: 2 */
var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('customers_holder', {
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: {
          tableName: 'customers',
          schema: 'san_francisco'
        },
        key: 'customer_id'
      }
    },
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    transaction_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    book_expired_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    active_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    isbn: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    tableName: 'customers_holder',
    schema: 'san_francisco',
    timestamps: false,
    indexes: [{
      name: "customers_holder_pkey",
      unique: true,
      fields: [{
        name: "customer_id"
      }, {
        name: "product_id"
      }]
    }]
  });
};
//# sourceMappingURL=customers_holder.js.map