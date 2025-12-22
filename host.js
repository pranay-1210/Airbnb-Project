app.get("/add-home", (req, res) => {
  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Add Home</title>
    </head>
    <body>
    <h1>Add Your Home</h1>
    <form action="/add-home" method="POST">
    <input type="text" name="houseName" placeholder="Name of your house" />
    <input type="submit" value="Add Home" />
    </form>
    </body>
    </html>`);
});

app.post("/add-home", (req, res) => {
  console.log(req.body);
  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Home Added</title>
    </head>
    <body>
    <h1>Home Added Successfully</h1>
    <a href="/">Go To Home</a>
    </body>
    </html>`);
});