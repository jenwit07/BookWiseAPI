"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAuthorList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _author = require("../repositories/authors/author");

var getAuthorList = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _author.getAllAuthors)().then(function (obj) {
              res.json({
                success: true,
                data: obj
              });
            })["catch"](function (e) {
              console.error(e);
              res.json({
                success: false,
                data: "error on getAuthorList"
              });
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAuthorList(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAuthorList = getAuthorList;
//# sourceMappingURL=authorsImpl.js.map