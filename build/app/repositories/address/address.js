"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putAddressService = exports.deleteAddressService = exports.createAddressService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var createAddressService = function createAddressService(_ref) {
  var gps = _ref.gps,
      zipCode = _ref.zipCode,
      addressLine1 = _ref.addressLine1,
      addressLine2 = _ref.addressLine2,
      university = _ref.university;
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
      var query, results;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              // # normalize locale obj
              query = {
                zipcode: zipCode,
                addressLine1: addressLine1,
                addressLine2: addressLine2,
                university: university
              };

              if (gps !== null && gps !== void 0 && gps.lat && gps !== null && gps !== void 0 && gps.lng) {
                query.lat_long = "(".concat(gps === null || gps === void 0 ? void 0 : gps.lat, ",").concat(gps === null || gps === void 0 ? void 0 : gps.lng, ")");
              }

              console.log('%c⧭', 'color: #00e600', query);
              _context.next = 6;
              return apiModels.address.create(query);

            case 6:
              results = _context.sent;
              console.log("### created new address ###");
              console.log(results.get({
                raw: true
              }));
              resolve(results.get({
                raw: true
              }));
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              reject(_context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }());
};

exports.createAddressService = createAddressService;

var putAddressService = function putAddressService(_ref3) {
  var address_id = _ref3.address_id,
      gps = _ref3.gps,
      zipCode = _ref3.zipCode,
      addressLine1 = _ref3.addressLine1,
      addressLine2 = _ref3.addressLine2,
      university = _ref3.university;
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
      var query;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              console.log("###### updated address : putStoreService ######");
              console.log(query);
              console.log({
                gps: gps,
                zipCode: zipCode,
                addressLine1: addressLine1,
                addressLine2: addressLine2,
                university: university
              }); // # normalize locale obj

              query = {
                zipcode: zipCode,
                addressLine1: addressLine1,
                addressLine2: addressLine2,
                university: university
              };

              if (gps !== null && gps !== void 0 && gps.lat && gps !== null && gps !== void 0 && gps.lng) {
                query.lat_long = "(".concat(gps === null || gps === void 0 ? void 0 : gps.lat, ",").concat(gps === null || gps === void 0 ? void 0 : gps.lng, ")");
              }

              console.log('%c⧭', 'color: #00e600', query);
              _context2.next = 9;
              return apiModels.address.update(_objectSpread({}, query), {
                where: {
                  address_id: address_id
                }
              }).then(function (result) {
                resolve(result);
              })["catch"](function (err) {
                console.error(err);
                reject(err);
              });

            case 9:
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              throw _context2.t0;

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
    }));

    return function (_x3, _x4) {
      return _ref4.apply(this, arguments);
    };
  }());
};

exports.putAddressService = putAddressService;

var deleteAddressService = function deleteAddressService(_ref5) {
  var address_id = _ref5.address_id;
  return new Promise( /*#__PURE__*/function () {
    var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(resolve, reject) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return apiModels.address.update({
                active_flag: false
              }, {
                where: {
                  address_id: address_id
                }
              }).then(function (result) {
                resolve(result);
              })["catch"](function (err) {
                console.error(err);
                reject(err);
              });

            case 3:
              _context3.next = 8;
              break;

            case 5:
              _context3.prev = 5;
              _context3.t0 = _context3["catch"](0);
              throw _context3.t0;

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 5]]);
    }));

    return function (_x5, _x6) {
      return _ref6.apply(this, arguments);
    };
  }());
};

exports.deleteAddressService = deleteAddressService;
//# sourceMappingURL=address.js.map