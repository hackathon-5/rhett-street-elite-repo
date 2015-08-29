var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Carrier = require('../models/carrier.js')
var Client = require('../models/client.js');

/* login user */
router.post('/login', function(req, res, next) {
    User.findOne({ email: req.params.email}, function(err, user) {
    if (err)
      res.send(err);
    if (user && user.password == req.body.password) {
      req.session.user = user;
      res.json({ "success": true });
    } else {
      res.json({ "success": false });
    }
  });
});

/* login user */
router.get('/logout', function(req, res, next) {
  req.session.user = null;
  res.json({ "success": true });
});

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

router.put('/:id', function(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    if (err)
      res.send(err);
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.role = req.body.role;
    user.carrierId = req.body.carrierId;
    user.clientId = req.body.clientId;
    user.save(function (err) {
      if (err)
        res.send(err);
      res.json(user);
    });
  });
});

/* Update user */
router.delete('/:id', function(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    if (err)
      res.send(err);
    user.remove(function(err) {
      if (err)
        res.send(err);
      res.json({ "success": true });
    });
  });
});

module.exports = router;
