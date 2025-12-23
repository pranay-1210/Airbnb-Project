const path = require("path");

const express = require("express");
const hostRouter = express.Router();

const rootDir = require("../util/path-util");




hostRouter.get("/add-home", (req, res) => {
  res.render('add-home', {pagetTitle: "Host Your Home"});
  
  
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res) => {
  registeredHomes.push(req.body);
  res.render('home-added', {pagetTitle: "Home Hosted"});
  
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;