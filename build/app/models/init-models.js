"use strict";

var DataTypes = require("sequelize").DataTypes;

var _address = require("./address");

var _authors = require("./authors");

var _balance = require("./balance");

var _books = require("./books");

var _books_by_category = require("./books_by_category");

var _categories = require("./categories");

var _customers = require("./customers");

var _customers_holder = require("./customers_holder");

var _product = require("./product");

var _product_transaction = require("./product_transaction");

var _products_at_stores = require("./products_at_stores");

var _stores = require("./stores");

function initModels(sequelize) {
  var address = _address(sequelize, DataTypes);

  var authors = _authors(sequelize, DataTypes);

  var balance = _balance(sequelize, DataTypes);

  var books = _books(sequelize, DataTypes);

  var books_by_category = _books_by_category(sequelize, DataTypes);

  var categories = _categories(sequelize, DataTypes);

  var customers = _customers(sequelize, DataTypes);

  var customers_holder = _customers_holder(sequelize, DataTypes);

  var product = _product(sequelize, DataTypes);

  var product_transaction = _product_transaction(sequelize, DataTypes);

  var products_at_stores = _products_at_stores(sequelize, DataTypes);

  var stores = _stores(sequelize, DataTypes);

  authors.belongsTo(customers, {
    foreignKey: "customer_id"
  });
  customers.hasMany(authors, {
    foreignKey: "customer_id"
  });
  balance.belongsTo(authors, {
    foreignKey: "author_id"
  });
  authors.hasOne(balance, {
    foreignKey: "author_id"
  });
  books.belongsTo(authors, {
    foreignKey: "author_id"
  });
  authors.hasMany(books, {
    foreignKey: "author_id"
  });
  books_by_category.belongsTo(categories, {
    foreignKey: "category_id"
  });
  books.belongsToMany(categories, {
    through: books_by_category,
    foreignKey: "isbn",
    otherKey: "category_id"
  });
  categories.hasMany(books_by_category, {
    foreignKey: "category_id"
  });
  books_by_category.belongsTo(books, {
    foreignKey: "isbn"
  });
  categories.belongsToMany(books, {
    through: books_by_category,
    foreignKey: "category_id",
    otherKey: "isbn"
  });
  books.hasMany(books_by_category, {
    foreignKey: "isbn"
  });
  customers.belongsTo(address, {
    foreignKey: "address_id"
  });
  address.hasMany(customers, {
    foreignKey: "address_id"
  });
  customers_holder.belongsTo(customers, {
    foreignKey: "customer_id"
  });
  customers.hasMany(customers_holder, {
    foreignKey: "customer_id"
  });
  customers_holder.belongsTo(books, {
    foreignKey: "isbn"
  });
  books.hasMany(customers_holder, {
    foreignKey: "isbn"
  });
  product.belongsTo(authors, {
    foreignKey: "authors_id"
  });
  authors.hasMany(product, {
    foreignKey: "authors_id"
  });
  product.belongsTo(books, {
    foreignKey: "isbn"
  });
  books.hasMany(product, {
    foreignKey: "isbn"
  });
  product_transaction.belongsTo(authors, {
    foreignKey: "authors_id"
  });
  authors.hasMany(product_transaction, {
    foreignKey: "authors_id"
  });
  product_transaction.belongsTo(customers, {
    foreignKey: "customers_id"
  });
  customers.hasMany(product_transaction, {
    foreignKey: "customers_id"
  });
  products_at_stores.belongsTo(product, {
    foreignKey: "isbn"
  });
  product.hasMany(products_at_stores, {
    foreignKey: "isbn"
  });
  products_at_stores.belongsTo(product, {
    foreignKey: "product_id"
  }); // stores.belongsToMany(product, { through: products_at_stores, foreignKey: "store_id", otherKey: "product_id" });

  product.hasMany(products_at_stores, {
    foreignKey: "product_id"
  });
  products_at_stores.belongsTo(stores, {
    foreignKey: "store_id"
  }); // product.belongsToMany(stores, { through: products_at_stores, foreignKey: "product_id", otherKey: "store_id" });

  stores.hasMany(products_at_stores, {
    foreignKey: "store_id"
  });
  stores.belongsTo(address, {
    foreignKey: "address_id"
  });
  address.hasMany(stores, {
    foreignKey: "address_id"
  });
  return {
    address: address,
    authors: authors,
    balance: balance,
    books: books,
    books_by_category: books_by_category,
    categories: categories,
    customers: customers,
    customers_holder: customers_holder,
    product: product,
    product_transaction: product_transaction,
    products_at_stores: products_at_stores,
    stores: stores
  };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports["default"] = initModels;
//# sourceMappingURL=init-models.js.map