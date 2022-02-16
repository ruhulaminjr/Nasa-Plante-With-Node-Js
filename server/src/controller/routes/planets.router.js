const express = require("express");
const getAllPlanets = require("../planets.controller");
const plantetRouters = express.Router();
plantetRouters.get("/", getAllPlanets);

module.exports = plantetRouters;
