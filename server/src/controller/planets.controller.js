const { planets } = require("../models/planets.models");
function getAllPlanets(req, res) {
  console.log("get Planets");
  res.status(200).json(planets);
}
module.exports = getAllPlanets;
