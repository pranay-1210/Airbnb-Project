const registeredHomes = [];


exports.getAddHome = (req, res) => {
  res.render('add-home', {pagetTitle: "Host Your Home"});
}

exports.postAddHome = (req, res) => {
  registeredHomes.push(req.body);
  res.render('home-added', {pagetTitle: "Home Hosted"});
}

exports.registeredHomes = registeredHomes;
