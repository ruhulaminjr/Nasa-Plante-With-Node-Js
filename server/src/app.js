const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const plantetRouters = require("./controller/routes/planets.router");
const launchesRouter = require("./controller/routes/launches.router");

const app = express();


app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use("/getplanets", plantetRouters);
app.use("/getLaunches", launchesRouter);
app.use(express.static(path.join(__dirname, "..", "public")));
// app.use(morgan("combined"));
module.exports = app;
