/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    product_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    authors_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: {
          tableName: 'authors',
          schema: 'san_francisco'
        },
        key: 'author_id'
      }
    },
    start_rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    prices: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    saving: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    service_charge: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    author_earn: {
      type: DataTypes.DOUBLE,
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
    sequelize,
    tableName: 'product',
    schema: 'san_francisco',
    timestamps: false,
    indexes: [
      {
        name: "product_isbn_unique",
        unique: true,
        fields: [
          { name: "isbn" },
        ]
      },
      {
        name: "product_pkey",
        unique: true,
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
