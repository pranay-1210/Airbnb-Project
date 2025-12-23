const Home = require("./../models/Home");

exports.getAddHome = (req, res) => {
  res.render('add-home', {pagetTitle: "Host Your Home"});
}

exports.postAddHome = (req, res) => {
  // console.log(req.body);
  const {houseName, price, location, rating, photoUrl} = req.body;
  const newHome = new Home(houseName, price, location, rating, photoUrl);
  
  newHome.save(error => {
    if(error) {
      res.redirect('/');
    } else {
    res.render('home-added', {pagetTitle: "Home Hosted"});
    }
  });
}
