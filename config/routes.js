var express = require('express'),
    router  = new express.Router();

//Auth related routes
var passport = require('passport');

// Require controllers.
var pagesController = require('../controllers/pages');
var usersController = require('../controllers/users');

//Google OAuth login Route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));
//Google OAuth callback Route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

//OAuth Logout Route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

// root path:
router.get('/', function(req, res){
  res.render('./pages/welcome', { user: req.user });
});
// Fix paths with user for login/logout UI
router.get('/about', function(req, res){
  res.render('./pages/about', { user: req.user });
});

router.get('/chefs', function(req, res){
  res.render('./pages/chefs', { user: req.user });
});

router.get('/disclaimer', function(req, res){
  res.render('./pages/disclaimer', { user: req.user });
});
router.get('/harold', function(req, res){
  res.render('./pages/harold', { user: req.user });
});

router.get('/ilan', function(req, res){
  res.render('./pages/ilan', { user: req.user });
});

router.get('/hung', function(req, res){
  res.render('./pages/hung', { user: req.user });
});

router.get('/stephanie', function(req, res){
  res.render('./pages/stephanie', { user: req.user });
});

router.get('/hosea', function(req, res){
  res.render('./pages/hosea', { user: req.user });
});

router.get('/michael', function(req, res){
  res.render('./pages/michael', { user: req.user });
});

router.get('/kevin', function(req, res){
  res.render('./pages/kevin', { user: req.user });
});

router.get('/richard', function(req, res){
  res.render('./pages/richard', { user: req.user });
});

router.get('/paul', function(req, res){
  res.render('./pages/paul', { user: req.user });
});

router.get('/kristen', function(req, res){
  res.render('./pages/kristen', { user: req.user });
});

router.get('/nicholas', function(req, res){
  res.render('./pages/nicholas', { user: req.user });
});

router.get('/mei', function(req, res){
  res.render('./pages/mei', { user: req.user });
});
//Chefs path:
router.get('/chefs', pagesController.chefs);
//Disclaimer path:
router.get('/disclaimer', pagesController.disclaimer);
//About path:
router.get('/about', pagesController.about);
//Chefs:
router.get('/harold', pagesController.harold);
router.get('/ilan', pagesController.ilan);
router.get('/hung', pagesController.hung);
router.get('/stepahnie', pagesController.stephanie);
router.get('/hosea', pagesController.hosea);
router.get('/michael', pagesController.michael);
router.get('/kevin', pagesController.kevin);
router.get('/richard', pagesController.richard);
router.get('/paul', pagesController.paul);
router.get('/kristen', pagesController.kristen);
router.get('/nicholas', pagesController.nicholas);
router.get('/mei', pagesController.mei);

// users resource paths:
router.get('/users',     usersController.index);
router.get('/users/:id', usersController.show);

module.exports = router;
