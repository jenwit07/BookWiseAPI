"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _passportJwt = require("passport-jwt");

var _commonKey = _interopRequireDefault(require("./commonKey"));

var _db = _interopRequireDefault(require("../config/db.config"));

// const membersModel = db.membersModel
module.exports = function (passport) {
  return true; // const jwtOptions = {
  //     jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  //     secretOrKey: commonKey.secreatKey
  // };
  // console.log(jwtOptions)
  // var jwtAuth = new JwtStrategy(jwtOptions, (payload, done) => {
  //     var _username = payload.sub
  //     membersModel.count({ where: { username: _username } }).then((c) => {
  //         if (c > 0) {
  //             return done(null, true);
  //         } else {
  //             done(null, false)
  //         }
  //     })
  // })
  // passport.use("jwt", jwtAuth);
};
//# sourceMappingURL=passport.js.map