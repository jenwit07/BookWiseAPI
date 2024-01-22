require("custom-env").env(`${process.env.NODE_ENV}`);
import express from "express";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import routes from "./config/routes";
import dayjs from "dayjs";
import { sequelize } from "./config/db.config";
import { initModels } from "./app/models/init-models";
import { DataTypes } from "sequelize";
import { swaggerOptions } from "./config/swagger/config.swagger";

/* CONFIG */
const bodyParser = require("body-parser");
const port = process.env.LINEPORT || 3306;

var app = express();
const expressSwagger = require("express-swagger-generator")(app);
global.apiModels = initModels(sequelize, DataTypes);

app.use(json({ limit: "50mb", extended: true }));
app.use(urlencoded({ limit: "50mb", extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Expose-Headers", "ETag");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send(
    `Anakin Service is running`
  );
});

expressSwagger(swaggerOptions);

routes(app);

app.listen(port, () => {
  console.log(
    `#### Stat Time ${dayjs().format(
      "DD/MM/YYYY HH:mm:ss"
    )} --- Anakin Service is running on port ${port} and ${
      process.env.APP_ENV
    } env`
  );
});
