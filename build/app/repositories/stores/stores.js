"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStoreService = createStoreService;
exports.deleteStoreService = void 0;
exports.getAllStores = getAllStores;
exports.putStoreService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _excluded = ["cur_page", "per_page"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getAllStores(req) {
  var query = req.query;
  var cur_page = query.cur_page,
      per_page = query.per_page,
      rest = (0, _objectWithoutProperties2["default"])(query, _excluded);
  return new Promise( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return apiModels.stores.findAndCountAll({
                offset: req.offset,
                limit: req.limit,
                include: [{
                  model: apiModels.address,
                  required: true
                }],
                where: _objectSpread({
                  active_flag: true
                }, rest)
              }).then(function (obj) {
                resolve(obj);
              })["catch"](function (e) {
                reject(e);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
}

function createStoreService(_ref2) {
  var name = _ref2.name,
      detail = _ref2.detail,
      address_id = _ref2.address_id;
  console.log('%c⧭', 'color: #ff0000', {
    name: name,
    detail: detail,
    address_id: address_id
  });
  if (!name || !address_id) throw new Error("missing required parameter name, detail or address_id");
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
      var query;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              query = {
                address_id: address_id,
                stores_name: name,
                stores_details: detail
              };
              _context2.next = 3;
              return apiModels.stores.create(_objectSpread(_objectSpread({}, query), {}, {
                raw: true
              })).then(function (obj) {
                resolve(obj);
              })["catch"](function (e) {
                reject(e);
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }());
}

var putStoreService = function putStoreService(updatedStore) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(resolve, reject) {
      var query;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              query = _objectSpread({}, updatedStore);
              console.log("###### updated stores : putStoreService ######");
              console.log(query);
              console.log({
                address_id: query.address_id,
                stores_name: query.name,
                stores_details: query.detail
              });
              _context3.next = 7;
              return apiModels.stores.update({
                address_id: query.address_id,
                stores_name: query.name,
                stores_details: query.detail
              }, {
                where: {
                  stores_id: query.stores_id
                }
              }).then(function (result) {
                resolve(result);
              })["catch"](function (err) {
                console.error(err);
                reject(err);
              });

            case 7:
              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              throw _context3.t0;

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 9]]);
    }));

    return function (_x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  }());
};

exports.putStoreService = putStoreService;

var deleteStoreService = function deleteStoreService(deleteUser) {
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(resolve, reject) {
      var query;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              query = _objectSpread({}, deleteUser);
              console.log("###### delete user ######");
              console.log(query);
              _context4.next = 6;
              return apiModels.stores.update({
                active_flag: false
              }, {
                where: {
                  stores_id: query.stores_id
                }
              }).then(function (result) {
                resolve(result);
              })["catch"](function (err) {
                console.error(err);
                reject(err);
              });

            case 6:
              _context4.next = 11;
              break;

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              throw _context4.t0;

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 8]]);
    }));

    return function (_x7, _x8) {
      return _ref5.apply(this, arguments);
    };
  }());
};

exports.deleteStoreService = deleteStoreService;
//# sourceMappingURL=stores.js.map