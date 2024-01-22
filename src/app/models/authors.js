/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authors', {
    author_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    author_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    customer_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: {
          tableName: 'customers',
          schema: 'san_francisco'
        },
        key: 'customer_id'
      }
    },
    author_signatures: {
      type: DataTypes.STRING,
      allowNull: true
    },
    active_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'authors',
    schema: 'san_francisco',
    timestamps: false,
    indexes: [
      {
        name: "authors_pkey",
        unique: true,
        fields: [
          { name: "author_id" },
        ]
      },
    ]
  });
};
