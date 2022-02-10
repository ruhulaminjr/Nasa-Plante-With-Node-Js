const planets = require("../models/planets.models")
function getAllPlanets(req, res) {
  console.log("get Planets");
  res.send("Waiting for planets");
}
module.exports = getAllPlanets;
