var express = require('express');
var router = express.Router();
var Carrier = require('../models/carrier.js')

/* GET carriers listing. */
router.get('/list', function(req, res, next) {
  Carrier.find(function(err, carriers) {
  	if (err)
      res.send(err);
  	res.json(carriers);
  });
});

router.get('/:id', function(req, res, next) {
  Carrier.findById(req.params.id, function(err, carrier) {
    if (err)
      res.send(err);
    res.json(carrier);
  });
});

/* Create Carrier */
router.post('/', function(req, res, next) {
  var carrier = new Carrier();
  carrier.name = req.body.name;
  carrier.address = req.body.address;
  carrier.city = req.body.city;
  carrier.state = req.body.state;
  carrier.zip = req.body.zip;
  carrier.phoneNum = req.body.phoneNum;
  carrier.totalComments = 0;
  carrier.totalRating = 0;
  carrier.averageRating = 0;

  carrier.save(function(err) {
  	if (err) {
  	  res.send(err);
  	} else {
      res.json(carrier);
  	}
  })
});

router.put('/:id', function(req, res, next) {
  Carrier.findById(req.params.id, function(err, carrier) {
    if (err)
      res.send(err);
    carrier.name = req.body.name;
    carrier.address = req.body.address;
    carrier.city = req.body.city;
    carrier.state = req.body.state;
    carrier.zip = req.body.zip;
    carrier.phoneNum = req.body.phoneNum;
    carrier.save(function (err) {
      if (err)
        res.send(err);
      res.json(user);
    });
  });
});

/* Update user */
router.delete('/:id', function(req, res, next) {
  Carrier.findById(req.params.id, function(err, carrier) {
    if (err)
      res.send(err);
    carrier.remove(function(err) {
      if (err)
        res.send(err);
      res.json({ "success": true });
    });
  });
});

module.exports = router;
