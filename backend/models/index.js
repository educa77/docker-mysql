"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};
const mysql = require("mysql2/promise");

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

initialize();

async function initialize() {
  // create db if it doesn't already exist
  const host = config.host;
  const port = config.port;
  const user = config.username;
  const password = config.password;
  const database = config.database;
  const connection = await mysql.createConnection({
    host,
    port,
    user,
    password,
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

  // connect to db
  const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
    {
      host: config.host,
      port: config.port,
      dialect: config.dialect,
      operatorsAliases: false,

      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    }
  );

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  // init models and add them to the exported db object
  db.currency = require("./currency")(sequelize, Sequelize);
  db.rate = require("./rate")(sequelize, Sequelize);
  // sync all models with database
  await sequelize.sync();
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = { db, sequelize };
