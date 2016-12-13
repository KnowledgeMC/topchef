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

var ilan = function(req, res, next){
  res.render('pages/ilan');
};

var hung = function(req, res, next){
  res.render('pages/hung');
};

var stephanie = function(req, res, next){
  res.render('pages/stephanie');
};

var hosea = function(req, res, next){
  res.render('pages/hosea');
};
var michael = function(req, res, next){
  res.render('pages/michael');
};
var kevin = function(req, res, next){
  res.render('pages/kevin');
};
var richard = function(req, res, next){
  res.render('pages/richard');
};
var paul = function(req, res, next){
  res.render('pages/paul');
};
var kristen = function(req, res, next){
  res.render('pages/kristen');
};
var nicholas = function(req, res, next){
  res.render('pages/nicholas');
};
var mei = function(req, res, next){
  res.render('pages/mei');
};

module.exports = {
  welcome: welcome,
  chefs: chefs,
  disclaimer: disclaimer,
  about: about,
  harold: harold,
  ilan: ilan,
  hung: hung,
  stephanie: stephanie,
  hosea: hosea,
  michael: michael,
  kevin: kevin,
  richard: richard,
  paul: paul,
  kristen: kristen,
  nicholas: nicholas,
  mei: mei
};
