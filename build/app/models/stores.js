"use strict";

/* jshint indent: 2 */
var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('stores', {
    stores_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
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
    },
    stores_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    stores_details: {
      type: DataTypes.STRING,
      allowNull: true
    },
    active_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize: sequelize,
    tableName: 'stores',
    schema: 'san_francisco',
    timestamps: false,
    indexes: [{
      name: "stores_pkey",
      unique: true,
      fields: [{
        name: "stores_id"
      }]
    }]
  });
};
//# sourceMappingURL=stores.js.map