"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swaggerOptions = void 0;

require("custom-env").env("".concat(process.env.NODE_ENV));

var swaggerOptions = {
  swaggerDefinition: {
    info: {
      description: "Provide API's for Stores",
      title: "Anakin-System",
      version: "1.0.0"
    },
    host: [process.env.SWAGGER_URL],
    basePath: "/v1",
    produces: ["application/json", "application/xml"],
    schemes: ["http", "https"],
    securityDefinitions: {
      bearer: {
        type: "apiKey",
        "in": "header",
        name: "Authorization",
        description: ""
      }
    }
  },
  basedir: __dirname,
  //app absolute path
  files: ["../**/*.js", "../routes.js"] //Path to the API handle folder,
  // route: {
  //   url: "/anakin/docs",
  //   docs: "/anakin/api-docs.json"
  // },

};
exports.swaggerOptions = swaggerOptions;
//# sourceMappingURL=config.swagger.js.map