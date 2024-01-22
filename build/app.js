"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./config/routes"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _db = require("./config/db.config");

var _initModels = require("./app/models/init-models");

var _sequelize = require("sequelize");

var _config = require("./config/swagger/config.swagger");

require("custom-env").env("".concat(process.env.NODE_ENV));

/* CONFIG */
var bodyParser = require("body-parser");

var port = process.env.LINEPORT || 3306;
var app = (0, _express["default"])();

var expressSwagger = require("express-swagger-generator")(app);

global.apiModels = (0, _initModels.initModels)(_db.sequelize, _sequelize.DataTypes);
app.use((0, _bodyParser.json)({
  limit: "50mb",
  extended: true
}));
app.use((0, _bodyParser.urlencoded)({
  limit: "50mb",
  extended: true
}));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Expose-Headers", "ETag");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use((0, _cors["default"])());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get("/", function (req, res) {
  res.send("Anakin Service is running");
});
expressSwagger(_config.swaggerOptions);
(0, _routes["default"])(app);
app.listen(port, function () {
  console.log("#### Stat Time ".concat((0, _dayjs["default"])().format("DD/MM/YYYY HH:mm:ss"), " --- Anakin Service is running on port ").concat(port, " and ").concat(process.env.APP_ENV, " env"));
});
//# sourceMappingURL=app.js.map