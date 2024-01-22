const env = {
  database: "postgres",
  username: "admin",
  password: "123456",
  host: "XXXXXXXXXX",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = env;
