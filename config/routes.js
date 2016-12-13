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
// about path with user
router.get('/about', function(req, res){
  res.render('./pages/about', { user: req.user });
});


//Chefs path:
router.get('/chefs', pagesController.chefs);
//Disclaimer path:
router.get('/disclaimer', pagesController.disclaimer);
//About path:
router.get('/about', pagesController.about);
//Chefs:
router.get('/harold', pagesController.harold);





// users resource paths:
router.get('/users',     usersController.index);
router.get('/users/:id', usersController.show);

module.exports = router;
