const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const App = express();
App.use(express.json());

App.use(
  cors({
    origin: "http://localhost:3000",
  })
);
App.use(morgan("combined"));
module.exports = App;
