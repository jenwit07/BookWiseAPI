require("custom-env").env(`${process.env.NODE_ENV}`);

export const swaggerOptions = {
  swaggerDefinition: {
    info: {
      description: "Provide API's for Stores",
      title: "Anakin-System",
      version: "1.0.0",
    },
    host: [process.env.SWAGGER_URL],
    basePath: "/v1",
    produces: ["application/json", "application/xml"],
    schemes: ["http", "https"],
    securityDefinitions: {
      bearer: {
        type: "apiKey",
        in: "header",
        name: "Authorization",
        description: "",
      },
    },
  },
  basedir: __dirname, //app absolute path
  files: ["../**/*.js", "../routes.js"], //Path to the API handle folder,
  // route: {
  //   url: "/anakin/docs",
  //   docs: "/anakin/api-docs.json"
  // },
};
