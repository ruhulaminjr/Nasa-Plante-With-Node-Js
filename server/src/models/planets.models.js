const parse = require("csv-parse");
const path = require("path");
console.log(path.dirname);
const fs = require("fs");
const results = [];
function isHabitable(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.16
  );
}
function loadPlanets() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "keplar_data.csv")
    )
      .pipe(
        parse.parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isHabitable(data)) {
          results.push(data);
        }
      })
      .on("error", (error) => {
        console.log(error);
        reject(error);
      })
      .on("end", () => {
        console.log(
          results.map((planet) => {
            console.log(planet["kepler_name"]);
            resolve();
          })
        );
        console.log(results.length);
      });
  });
}


module.exports = {
  loadPlanets,
  planets: results,
};
