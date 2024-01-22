"use strict";

/* jshint indent: 2 */
var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('address', {
    address_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    lat_long: {
      type: "POINT",
      allowNull: true
    },
    zipcode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addressLine1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addressLine2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    active_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    province: {
      type: DataTypes.STRING,
      allowNull: true
    },
    amphoe: {
      type: DataTypes.STRING,
      allowNull: true
    },
    district: {
      type: DataTypes.STRING,
      allowNull: true
    },
    university: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize: sequelize,
    tableName: 'address',
    schema: 'san_francisco',
    timestamps: false,
    indexes: [{
      name: "address_pkey",
      unique: true,
      fields: [{
        name: "address_id"
      }]
    }]
  });
};
//# sourceMappingURL=address.js.map