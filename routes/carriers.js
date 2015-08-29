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

/* Create Carrier */
router.post('/', function(req, res, next) {
  var carrier = new Carrier();
  carrier.name = req.body.name;
  carrier.save(function(err) {
  	if (err) {
  	  res.send(err);
  	} else {
      res.json(carrier);
  	}
  })
});

module.exports = router;
