
const path = require("path");
const express = require("express");
const storeRouter = express.Router();

const rootDir = require("../util/path-util"); 
const { registeredHomes } = require("./hostRouter");

storeRouter.get("/", (req, res,next) => {
  console.log(registeredHomes);
  // res.sendFile(path.join(rootDir, "views", "index.html"));
  res.render('index', { homes: registeredHomes, pagetTitle: "Our Airbnb" }); //for rendering the registered homes using ejs template engine
 });

module.exports = storeRouter;