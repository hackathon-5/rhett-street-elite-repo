var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Carrier = require('../models/carrier.js')
var Client = require('../models/client.js');


router.get('/list', function(req, res, next) {
    User.find(function(err, users) {
    if (err)
      res.send(err);
    res.json(users);
  });
});

/* GET user */
router.get('/:id', function(req, res, next) {
    User.findById(req.params.id, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
});

/* Create user */
router.post('/', function(req, res, next) {
  var user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  user.role  = req.body.role;
  user.carrierId = req.body.carrierId;
  user.clientId = req.body.clientId;

  req.session.user = user;

  user.save(function(err) {
    if (err)
      res.send(err);
    res.json(user);
  });
});

/* Update user */
router.put('/:id', function(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    if (err)
    	res.send(err);
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.role  = req.body.role;
    user.carrierId = req.body.carrierId;
    user.clientId = req.body.clientId;
    user.save(function(err) {
    if (err)
      res.send(err);
    res.json(user);
    });
  });
});

module.exports = router;
