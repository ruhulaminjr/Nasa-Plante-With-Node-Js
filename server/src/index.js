const http = require("http");
const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 5000;
const app = require("./app");
const { loadPlanets } = require("./models/planets.models");

const server = http.createServer(app);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
loadPlanets().then(() => {
  server.listen(PORT, () => {
    console.log("server running oon http://localhost:" + PORT);
  });
});
