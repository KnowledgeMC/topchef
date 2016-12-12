var express = require('express'),
    router  = new express.Router();

// Require controllers.
var pagesController = require('../controllers/pages');
var usersController = require('../controllers/users');

// root path:
router.get('/', pagesController.welcome);
//Chefs path:
router.get('/chefs', pagesController.chefs);
//Disclaimer path:
router.get('/disclaimer', pagesController.disclaimer);
//About path:
router.get('/about', pagesController.about);






// users resource paths:
router.get('/users',     usersController.index);
router.get('/users/:id', usersController.show);

module.exports = router;
