import dayjs from "dayjs";
const Joi = require("joi");

module.exports = {
  getDateTimeFormatStr: function (date, format = "DD/MM/YY HH:mm:ss") {
    return dayjs(date).format(format);
  },
  pagination: (req, res, next) => {
    let { cur_page, per_page } = req.query;
    if (cur_page && per_page) {
      req.cur_page = parseInt(cur_page);
      req.per_page = parseInt(per_page);
      req.limit = parseInt(per_page);
      req.offset = parseInt(cur_page) * parseInt(per_page) - parseInt(per_page);
    }
    next();
  },
  joiValidator: (_schema) => {
    return async (req, res, next) => {
      let { schema, options } = _schema;
      if (!options) {
        options = {
          abortEarly: false, // include all errors
          allowUnknown: true, // ignore unknown props
          stripUnknown: true, // remove unknown props
        };
      }

      let data = {};

      if (req.method == "POST" || req.method == "PUT" || req.method == "PATCH")
        data = req.body;
      if (req.method == "GET" || req.method == "DELETE") data = req.query;

      const { value, error } = await schema.validate(data, options);
      const valid = error == null;

      if (valid) {
        req.joi = value;
        next();
      } else {
        const { details } = error;
        const message = details.map((i) => i.message).join(",");

        console.log("error", message);
        res.status(422).json({ error: message });
      }
    };
  },
};
