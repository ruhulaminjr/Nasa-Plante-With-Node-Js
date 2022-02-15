const express = require("express");
const getAllLaunchess = require("../launchess.controller");
const launchesRouter = express.Router();

launchesRouter.get("/getLaunches", getAllLaunchess);

module.exports = launchesRouter;
