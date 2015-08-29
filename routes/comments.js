var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Carrier = require('../models/carrier.js');

/* login user */
router.post('/login', function(req, res, next) {
    User.findOne({ email: req.params.email}, function(err, user) {
    if (err)
      res.send(err);
    if (user.password == res.body.password) {
      req.session.user = user;
      res.json({ "success": true });
    } else {
      res.json({ "success": false });
    }
  });
});

module.exports = router;
