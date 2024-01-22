"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _home = require("../app/controllers/home");

var router = (0, _express.Router)();
/* middleware zone */

router.use(function timeLog(req, res, next) {
  console.log('Authentication Needed Service with Time: ', Date.now());
  next();
});
router.route('/').get(function (req, res) {
  res.send('please sign in !!');
});
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=a-routers.js.map