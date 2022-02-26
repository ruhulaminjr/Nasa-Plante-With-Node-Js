const {
  getallLaunches,
  addLaunches,
  existLaunch,
  abourdedLaunch,
} = require("../models/launches.model");
function httpgetAllLaunchess(req, res) {
  res.status(200).json(getallLaunches());
}
function httpAddLaunches(req, res) {
  const launch = req.body;
  if (!launch.mission || !launch.rocket || !launch.destination) {
    return res.status(400).json({
      error: "Some Thing Went Wrong On Lauch Property",
    });
  }
  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid Launch Date",
    });
  }
  addLaunches(launch);
  res.status(201).json(launch);
}
function httpAboardLaunches(req, res) {
  console.log(req.params.id);
  const launchId = Number(req.params.id);
  if (!existLaunch(launchId)) {
    return res.status(404).json({
      error: "Launch Not Found",
    });
  }
  const deletedLaunch = abourdedLaunch(launchId);
  return res.status(200).json(deletedLaunch);
}
module.exports = {
  httpgetAllLaunchess,
  httpAddLaunches,
  httpAboardLaunches,
};
