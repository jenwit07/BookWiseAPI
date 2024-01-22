"use strict";

/* jshint indent: 2 */
var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('categories', {
    category_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    'active_ﬂag': {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize: sequelize,
    tableName: 'categories',
    schema: 'san_francisco',
    timestamps: false,
    indexes: [{
      name: "categories_pkey",
      unique: true,
      fields: [{
        name: "category_id"
      }]
    }]
  });
};
//# sourceMappingURL=categories.js.map