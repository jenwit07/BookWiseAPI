"use strict";

/* jshint indent: 2 */
var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('customers', {
    customer_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    customer_first_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    customer_last_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email_address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    payload: {
      type: DataTypes.JSON,
      allowNull: true
    },
    active_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    address_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: {
          tableName: 'address',
          schema: 'san_francisco'
        },
        key: 'address_id'
      }
    }
  }, {
    sequelize: sequelize,
    tableName: 'customers',
    schema: 'san_francisco',
    timestamps: false,
    indexes: [{
      name: "customers_pkey",
      unique: true,
      fields: [{
        name: "customer_id"
      }]
    }]
  });
};
//# sourceMappingURL=customers.js.map