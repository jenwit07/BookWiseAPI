/* jshint indent: 2 */

const dayjs = require('dayjs');
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('books', {
    isbn: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    author_id: {
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
    book_title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    book_desc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_of_request: {
      type: DataTypes.DATE,
      allowNull: true,
      get: function() {
        return dayjs(this.getDataValue('date_of_request')).format('DD/MM/YYYY HH:mm:ss')
     }
    },
    book_payload: {
      type: DataTypes.JSON,
      allowNull: true
    },
    'active_ﬂag': {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "Y"
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "PENDING"
    },
    author_prices_request: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      get: function() {
        return dayjs(this.getDataValue('create_date')).format('DD/MM/YYYY HH:mm:ss')
     }
    },
    create_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      get: function() {
        return dayjs(this.getDataValue('update_date')).format('DD/MM/YYYY HH:mm:ss')
     }
    },
    update_by: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'books',
    schema: 'san_francisco',
    timestamps: false,
    indexes: [
      {
        name: "books_pkey",
        unique: true,
        fields: [
          { name: "isbn" },
        ]
      },
    ]
  });
};
