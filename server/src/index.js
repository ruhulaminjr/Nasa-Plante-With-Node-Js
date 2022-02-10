const http = require("http");
const PORT = process.env.PORT || 5000;
const app = require("./app");
const server = http.createServer(app);
const plantetRouters = require("./controller/routes/planets.router");
app.use(plantetRouters);
server.listen(PORT, () => {
  console.log("server running oon http://localhost:" + PORT);
});
