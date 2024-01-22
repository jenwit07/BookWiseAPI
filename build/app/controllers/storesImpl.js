"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putStoreRequest = exports.getStoreList = exports.deleteStoreRequest = exports.createStore = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _stores = require("../repositories/stores/stores");

var getStoreList = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _stores.getAllStores)(req).then(function (obj) {
              res.json({
                success: true,
                cur_page: req.cur_page ? req.cur_page : 1,
                per_page: req.per_page ? req.per_page : null,
                page_items: obj.count,
                page_all: Math.ceil(obj.count / req.per_page),
                data: obj.rows
              });
            })["catch"](function (e) {
              console.error(e);
              res.json({
                success: false,
                data: "error on getStoreList"
              });
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getStoreList(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getStoreList = getStoreList;

var createStore = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            console.log("#############");
            console.log(req.joi);
            _context2.next = 5;
            return (0, _stores.createStoreService)(req.joi);

          case 5:
            result = _context2.sent;
            res.status(201).send(result);
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);
            res.status(400).send({
              name: _context2.t0.name,
              message: _context2.t0.message
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function createStore(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createStore = createStore;

var putStoreRequest = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var response;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _stores.putStoreService)(req.joi);

          case 3:
            response = _context3.sent;

            if (!(response[0] == 0)) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", res.status(409).send({
              message: "record was not found"
            }));

          case 6:
            res.status(204).send();
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);
            res.status(400).send({
              message: _context3.t0
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));

  return function putStoreRequest(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.putStoreRequest = putStoreRequest;

var deleteStoreRequest = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var response;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return (0, _stores.deleteStoreService)(req.joi);

          case 3:
            response = _context4.sent;

            if (!(response[0] == 0)) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", res.status(409).send({
              message: "record was not found"
            }));

          case 6:
            res.status(204).send();
            _context4.next = 13;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);
            res.status(400).send({
              message: _context4.t0
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 9]]);
  }));

  return function deleteStoreRequest(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteStoreRequest = deleteStoreRequest;
//# sourceMappingURL=storesImpl.js.map