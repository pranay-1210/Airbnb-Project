
const express = require("express");

const storeController = require("./../controllers/storeController");

const storeRouter = express.Router();



storeRouter.get("/", storeController.getIndex); 
storeRouter.get("/homes", storeController.getHomes); 
storeRouter.get("/homes/:homeIdentity", storeController.getHomeDetails); 



module.exports = storeRouter;