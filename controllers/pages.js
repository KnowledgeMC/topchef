var welcome = function(req, res, next) {
  res.render('pages/welcome');
};

var chefs = function(req,res,next){
  res.render('pages/chefs');
};

var disclaimer = function(req,res,next){
  res.render('pages/disclaimer');
};

var about = function(req,res,next){
  res.render('pages/about');
};

var harold = function(req, res, next){
  res.render('pages/harold');
};


module.exports = {
  welcome: welcome,
  chefs: chefs,
  disclaimer: disclaimer,
  about: about,
  harold: harold
};
