const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/index.js");
const { sequelize } = require("../models/index");

const app = express();

const port = process.env.PORT || 3001;

app.name = "API";

app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
  })
);
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors());

app.use("/", routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
