/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('balance', {
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: {
          tableName: 'authors',
          schema: 'san_francisco'
        },
        key: 'author_id'
      }
    },
    customer_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    active_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'balance',
    schema: 'san_francisco',
    timestamps: false,
    indexes: [
      {
        name: "balance_pkey",
        unique: true,
        fields: [
          { name: "author_id" },
        ]
      },
    ]
  });
};
