"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkToken = checkToken;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _db = _interopRequireDefault(require("../config/db.config"));

var accessModel = _db["default"].accessModel; //TODO : Refresh Token Checker

function checkToken(_x, _x2, _x3) {
  return _checkToken.apply(this, arguments);
}

function _checkToken() {
  _checkToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _token = req.header('authorization');
            _context.next = 3;
            return accessModel.count({
              where: {
                token: _token
              }
            }).then(function (c) {
              if (c > 0) {
                next();
              } else {
                res.json({
                  success: false,
                  data: "Unauthorization"
                });
              }
            })["catch"](function (e) {
              console.error(e);
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _checkToken.apply(this, arguments);
}
//# sourceMappingURL=tokenChecker.js.map