const path = require("path");

const express = require("express");
const hostRouter = express.Router();

const rootDir = require("../util/path-util");




hostRouter.get("/add-home", (req, res) => {
    res.sendFile(path.join(rootDir, "views", "add-home.html"));
  
  
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res) => {
  registeredHomes.push(req.body);
  res.sendFile(path.join(rootDir, "views", "home-added.html"));
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;