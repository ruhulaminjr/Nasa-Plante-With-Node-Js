const http = require("http");
const PORT = process.env.PORT || 5000;
const app = require("./app");
const { loadPlanets } = require("./models/planets.models");

const server = http.createServer(app);
const plantetRouters = require("./controller/routes/planets.router");
app.use(plantetRouters);
loadPlanets().then(() => {
  server.listen(PORT, () => {
    console.log("server running oon http://localhost:" + PORT);
  });
});
