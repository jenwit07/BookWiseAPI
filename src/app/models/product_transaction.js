/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_transaction', {
    transaction_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customers_id: {
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
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    payload: {
      type: DataTypes.JSON,
      allowNull: true
    },
    service: {
      type: DataTypes.STRING,
      allowNull: true
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
    trasaction_datetime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'product_transaction',
    schema: 'san_francisco',
    timestamps: false,
    indexes: [
      {
        name: "product_transaction_pkey",
        unique: true,
        fields: [
          { name: "transaction_id" },
        ]
      },
    ]
  });
};
