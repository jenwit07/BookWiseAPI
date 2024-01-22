"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putAddressRequest = exports.deleteAddressRequest = exports.createAddress = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _address = require("../repositories/address/address");

var createAddress = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _address.createAddressService)(req.joi);

          case 3:
            result = _context.sent;
            res.status(201).send(result);
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
            res.status(400).send({
              name: _context.t0.name,
              message: _context.t0.message
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function createAddress(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createAddress = createAddress;

var putAddressRequest = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var response;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _address.putAddressService)(req.joi);

          case 3:
            response = _context2.sent;

            if (!(response[0] == 0)) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.status(409).send({
              message: "record was not found"
            }));

          case 6:
            res.status(204).send();
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);
            res.status(400).send({
              message: _context2.t0
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function putAddressRequest(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.putAddressRequest = putAddressRequest;

var deleteAddressRequest = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var response;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _address.deleteAddressService)(req.joi);

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

  return function deleteAddressRequest(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteAddressRequest = deleteAddressRequest;
//# sourceMappingURL=address.js.map