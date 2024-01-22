"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSignInRequest = validateSignInRequest;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _db = _interopRequireDefault(require("../../config/db.config"));

var membersModel = _db["default"].membersModel;

function validateSignInRequest(_x, _x2, _x3) {
  return _validateSignInRequest.apply(this, arguments);
}

function _validateSignInRequest() {
  _validateSignInRequest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var usernameObj;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            /*  
            1.Find membersModel by Username
            2.IF record > { 0 check password } else { return no username in system }
            3.validate password if pass { next() } else { return worng password }
            */
            usernameObj = {
              'username': "".concat(req.body.username)
            };
            console.info('Username : ' + usernameObj.username);
            _context.next = 4;
            return membersModel.findOne({
              where: usernameObj
            }).then(function (obj) {
              /* case username wrong */
              if (!obj) return res.json({
                success: false,
                messege: 'username is incorrect'
              });
              var password = req.body.password;

              if (password === obj.password) {
                next();
              } else {
                res.json({
                  success: false,
                  messege: 'password is incorrect'
                });
              }
            })["catch"](function (e) {
              console.log("catch error  :" + e);
              res.json({
                success: false,
                message: e
              });
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _validateSignInRequest.apply(this, arguments);
}
//# sourceMappingURL=validateSignInRequest.js.map