const Home = require("./../models/Home");

exports.getAddHome = (req, res) => {
  res.render("host/edit-home", {
    editing: false,
    pagetTitle: "Host Your Home",
  });
};

exports.getEditHome = (req, res) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  if (!editing) {
    console.log("Editing flag not set properly");
    return res.redirect("/host/host-homes");
  }

  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("Home not found for editing");
      return res.redirect("/host/host-homes");
    }
    console.log(homeId, editing, home);
    res.render("host/edit-home", {
      home: home,
      editing: editing,
      pagetTitle: "Edit your Home",
    });
  });
};

exports.postAddHome = (req, res) => {
  // console.log(req.body);
  const { houseName, price, location, rating, photoUrl } = req.body;
  const newHome = new Home(houseName, price, location, rating, photoUrl);

  newHome.save((error) => {
    if (error) {
      res.redirect("/");
    } else {
      res.render("host/home-added", { pagetTitle: "Home Hosted" });
    }
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("host/host-homes", {
      homes: registeredHomes,
      pagetTitle: "Host Homes",
    });
  });
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photoUrl } = req.body;
  const newHome = new Home(houseName, price, location, rating, photoUrl);
  newHome.id = id;
  newHome.save((error) => {
    if (error) {
      console.log("Error while updating home", error);
    } else {
      res.redirect("/host/host-homes");
    }
  });
};