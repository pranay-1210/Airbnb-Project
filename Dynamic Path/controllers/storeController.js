const Home = require("./../models/Home");

exports.getIndex = (req, res,next) => {
  Home.fetchAll(registeredHomes => {
    res.render('store/index', { homes: registeredHomes, pagetTitle: "Our Airbnb" });
  }); 
};


exports.getHomes = (req, res,next) => {
  Home.fetchAll(registeredHomes => {
    res.render('store/homes', { homes: registeredHomes, pagetTitle: "Our Airbnb" });
  }); 
};

exports.getFavourites = (req, res,next) => {
  Home.fetchAll(registeredHomes => {
    res.render('store/favourites', { homes: registeredHomes, pagetTitle: "Favourites" });
  }); 
};

exports.postAddFavourites = (req, res,next) => {
  console.log("Came to add favourites",req.body);
  res.redirect('/favourites');
};



exports.getHomeDetails = (req, res,next) => {
  const homeId = req.params.homeIdentity;
  Home.findById(homeId, home => {
    if(!home) {
      console.log("Home not found");
      return res.redirect("/homes");
    }
    res.render('store/home-detail', { home: home, pagetTitle: "Home Detail" });
  });
}
  