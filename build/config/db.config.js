"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

require('custom-env').env("".concat(process.env.NODE_ENV));

require('custom-env').env("".concat(process.env.NODE_ENV));

var sequelize = new _sequelize["default"](process.env.DATABASE, process.env.USER_DB, process.env.PASSWORD, {
  logging: false,
  host: process.env.HOST,
  dialect: process.env.DIALECT,
  operatorsAliases: false,
  omitNull: true,
  port: process.env.DB_AUTH,
  timezone: '+07:00',
  pool: process.env.DB_POOL
});
exports.sequelize = sequelize;
//# sourceMappingURL=db.config.js.map