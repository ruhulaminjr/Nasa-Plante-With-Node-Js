const express = require("express");
const cors = require("cors");
const App = express();
App.use(express.json());

App.use(
  cors({
    origin: "http://localhost:3000",
  })
);
module.exports = App;
