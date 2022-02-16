const launches = new Map();
let latestFlightNumber = 100;
const launch = {
  flightNumber: 100,
  mission: "kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27,2030"),
  destination: "Kepler-442 b",
  customer: ["Space X", "Nasa"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);
function getallLaunches() {
  return Array.from(launches.values());
}
function addLaunches(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      customer: ["Space X", "Nasa"],
      upcoming: true,
      success: true,
    })
  );
}
function existLaunch(launchId) {
  return launches.has(launchId);
}
function abourdedLaunch(id) {
  const aborded = launches.get(id);
  aborded.upcoming = false;
  aborded.success = false;
  return aborded;
}
module.exports = {
  getallLaunches,
  addLaunches,
  existLaunch,
  abourdedLaunch,
};
