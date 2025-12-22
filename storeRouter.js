const express = require("express");
const storeRouter = express.Router();

storeRouter.get("/", (req, res,next) => {
  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Our Airbnb</title>
    </head>
    <body>
    <h1>Welcome to Our Airbnb</h1>
    <a href="/host/add-home">Add Home</a>
    </body>
    </html>`);
 });

module.exports = storeRouter;