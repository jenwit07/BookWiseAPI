"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.healthCheck = healthCheck;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

/* Done : Health Check response server details */
function healthCheck(_x, _x2) {
  return _healthCheck.apply(this, arguments);
}

function _healthCheck() {
  _healthCheck = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var presentDate;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            presentDate = Date.now();
            res.send('faraday backend service is running time : ' + presentDate);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _healthCheck.apply(this, arguments);
}
//# sourceMappingURL=manageInitRequest.js.map