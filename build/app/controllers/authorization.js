"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginRequest = loginRequest;
exports.logoutRequest = logoutRequest;
exports.registerRequest = registerRequest;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jwtSimple = _interopRequireDefault(require("jwt-simple"));

var _commonKey = _interopRequireDefault(require("../../config/commonKey"));

var _util = _interopRequireDefault(require("util"));

var _category = require("../repositories/summary/category");

var _db = _interopRequireDefault(require("../../config/db.config"));

var shopModel = _db["default"].shopModel;
var membersModel = _db["default"].membersModel;
var accessModel = _db["default"].accessModel;
/* signIn method */

function loginRequest(_x, _x2) {
  return _loginRequest.apply(this, arguments);
}
/* signUp method */


function _loginRequest() {
  _loginRequest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var payload, _token, usernameObj, _userID, accessObj;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            payload = {
              sub: req.body.username,
              iat: new Date().getTime(),
              type: 'customer'
            };
            _token = _jwtSimple["default"].encode(payload, _commonKey["default"].secreatKey);
            usernameObj = {
              username: "".concat(req.body.username)
            };
            _context.next = 5;
            return membersModel.findOne({
              where: usernameObj
            }).then(function (obj) {
              _userID = obj.userID;
              console.log('user id : ' + _userID + 'username : ' + usernameObj.username);
            });

          case 5:
            accessObj = {
              userID: _userID,
              username: req.body.username,
              token: _token
            };
            _context.next = 8;
            return accessModel.create(accessObj).then(function (obj) {
              if (obj) {
                console.log('this case');
                (0, _category.category)().then(function (c) {
                  var categoryList = [];
                  c.forEach(function (element) {
                    categoryList.push({
                      categoryID: element.categoryID,
                      categoryName: element.categoryName
                    });
                  });
                  return res.json({
                    success: true,
                    accessToken: _token,
                    category: categoryList
                  });
                })["catch"](function (err) {
                  return res.json({
                    success: false,
                    err: "Service Error"
                  });
                });
              } else {
                console.log("Service cannot insert record into table EAW_ACCESS");
                return res.json({
                  success: false,
                  err: "Service Error"
                });
              }
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loginRequest.apply(this, arguments);
}

function registerRequest(_x3, _x4) {
  return _registerRequest.apply(this, arguments);
}
/* TODO : Log Out Methods */


function _registerRequest() {
  _registerRequest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var shopObj, _shopID, memberObj;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            /*
              1.Validate Username ใน DB ว่ามีหรือป่าว ถ้าไม่มีไปต่อ ถ้ามี ดีดออก
              2.Insert record ลงใน EAW_SHOP ถ้า Success เอา shopID มาใช้ต่อ ถ้า Err ดีดออก
              3.Insert record ลงใน EAW_MEMBERS If Success Res Success esle rollback transaction
            */
            shopObj = {
              contactFName: req.body.contactFName,
              contactLName: req.body.contactLName,
              Address: req.body.Address,
              City: req.body.City,
              State: req.body.State,
              PostalCode: req.body.PostalCode,
              Email: req.body.Email,
              Url: req.body.Url,
              PaymentMethod: req.body.PaymentMethod,
              companyName: req.body.companyName,
              TypeGoods: req.body.TypeGoods
            };
            memberObj = {
              shopID: '',
              username: req.body.username,
              password: req.body.password,
              salt: '',
              userType: 'Owner'
            };
            console.log('shopObj' + _util["default"].inspect(shopObj));
            console.log('memberObj' + _util["default"].inspect(memberObj));
            _context2.next = 6;
            return membersModel.count({
              where: {
                'username': req.body.username
              }
            }).then(function (c) {
              if (c > 0) {
                console.log("username ".concat(req.body.username, " are duplicated"));
                return res.json({
                  success: false,
                  err: "username ".concat(req.body.username, " are duplicated")
                });
              } else {
                console.log("username isn't dupplicate");
                shopModel.create(shopObj).then(function (obj) {
                  console.info('-----shopObj-----');
                  console.info(obj);

                  if (obj) {
                    _shopID = obj.shopID;
                    memberObj.shopID = obj.shopID;
                    console.log('EAW_SHOP was created with shopID : ' + _shopID);
                    membersModel.create(memberObj).then(function (obj) {
                      console.log('-----memberObj-----');
                      console.info(obj);

                      if (obj) {
                        var _userID = obj.userID;
                        var _userName = obj.username;
                        console.log('EAW_MEMBER was created with userID : ' + _userID);
                        return res.json({
                          success: true,
                          message: "SignUp Complete with userID ".concat(_userID, " and username ").concat(_userName)
                        });
                      } else {
                        console.log("Service cannot insert record into table EAW_MEMBER");
                        return res.json({
                          success: false,
                          err: "Service cannot insert record into table EAW_MEMBER"
                        });
                        /* TODO : ROLLBACK shopModel with shopID */
                      }
                    });
                  } else {
                    return res.json({
                      success: false,
                      err: "Service cannot insert record into table EAW_SHOP"
                    });
                  }
                });
              }
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _registerRequest.apply(this, arguments);
}

function logoutRequest(_x5, _x6) {
  return _logoutRequest.apply(this, arguments);
}

function _logoutRequest() {
  _logoutRequest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _token;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _token = req.header('authorization');
            _context3.next = 3;
            return accessModel.destroy({
              where: {
                token: _token
              }
            }).then(function () {
              res.json({
                success: true,
                data: []
              });
            })["catch"](function (e) {
              res.json({
                success: false,
                data: e
              });
            });

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _logoutRequest.apply(this, arguments);
}
//# sourceMappingURL=authorization.js.map