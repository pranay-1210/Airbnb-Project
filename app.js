const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Our Airbnb</title>
    </head>
    <body>
    <h1>Welcome to Our Airbnb</h1>
    <a href="/add-home">Add Home</a>
    </body>
    </html>`);
});



app.use((req, res, next) => {
  console.log("First Middleware", req.url, req.method, req.body);
  next();
});

app.use((req, res, next) => {
  res.statusCode = 404;
  res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <title>Page Not Found</title>
            </head>
            <body>
            <h1>404 Page Not Found</h1>
            </body>
            </html>
        `);
  res.end();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});

