"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var Joi = require("joi");

module.exports = {
  getDateTimeFormatStr: function getDateTimeFormatStr(date) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "DD/MM/YY HH:mm:ss";
    return (0, _dayjs["default"])(date).format(format);
  },
  pagination: function pagination(req, res, next) {
    var _req$query = req.query,
        cur_page = _req$query.cur_page,
        per_page = _req$query.per_page;

    if (cur_page && per_page) {
      req.cur_page = parseInt(cur_page);
      req.per_page = parseInt(per_page);
      req.limit = parseInt(per_page);
      req.offset = parseInt(cur_page) * parseInt(per_page) - parseInt(per_page);
    }

    next();
  },
  joiValidator: function joiValidator(_schema) {
    return /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
        var schema, options, data, _yield$schema$validat, value, error, valid, details, message;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                schema = _schema.schema, options = _schema.options;

                if (!options) {
                  options = {
                    abortEarly: false,
                    // include all errors
                    allowUnknown: true,
                    // ignore unknown props
                    stripUnknown: true // remove unknown props

                  };
                }

                data = {};
                if (req.method == "POST" || req.method == "PUT" || req.method == "PATCH") data = req.body;
                if (req.method == "GET" || req.method == "DELETE") data = req.query;
                _context.next = 7;
                return schema.validate(data, options);

              case 7:
                _yield$schema$validat = _context.sent;
                value = _yield$schema$validat.value;
                error = _yield$schema$validat.error;
                valid = error == null;

                if (valid) {
                  req.joi = value;
                  next();
                } else {
                  details = error.details;
                  message = details.map(function (i) {
                    return i.message;
                  }).join(",");
                  console.log("error", message);
                  res.status(422).json({
                    error: message
                  });
                }

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }();
  }
};
//# sourceMappingURL=helper.js.map