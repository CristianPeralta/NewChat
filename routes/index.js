var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/signup', userController.create);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

module.exports = router;
