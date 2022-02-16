const express = require("express");
const {
  httpAddLaunches,
  httpgetAllLaunchess,
  httpAboardLaunches,
} = require("../launchess.controller");
const launchesRouter = express.Router();

launchesRouter.get("/", httpgetAllLaunchess);
launchesRouter.post("/", httpAddLaunches);
launchesRouter.delete("/:id", httpAboardLaunches);

module.exports = launchesRouter;
