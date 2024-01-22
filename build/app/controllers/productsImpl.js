"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductsList = exports.getProductsAtStores = exports.getBooksList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _product = require("../repositories/products/product");

var getBooksList = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _product.getAllBooks)(req).then(function (obj) {
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
                data: "error on getBooksList"
              });
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getBooksList(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getBooksList = getBooksList;

var getProductsList = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _product.getAllProducts)().then(function (obj) {
              res.json({
                success: true,
                data: obj
              });
            })["catch"](function (e) {
              console.error(e);
              res.json({
                success: false,
                data: "error on getBooksList"
              });
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getProductsList(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProductsList = getProductsList;

var getProductsAtStores = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var storeID, isbn;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            storeID = req.query.store_id;
            isbn = req.query.isbn;
            _context3.next = 4;
            return (0, _product.getAllBooksAtStores)(isbn, storeID).then(function (obj) {
              res.json({
                success: true,
                data: obj
              });
            })["catch"](function (e) {
              console.error(e);
              res.json({
                success: false,
                data: "error on getProductsAtStores"
              });
            });

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getProductsAtStores(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getProductsAtStores = getProductsAtStores;
//# sourceMappingURL=productsImpl.js.map