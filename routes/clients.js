var express = require('express');
var router = express.Router();
var Client = require('../models/client.js')

/* GET clients listing. */
router.get('/list', function(req, res, next) {
  Client.find(function(err, clients) {
  	if (err)
  		  res.send(err);
  	res.json(clients);
  });
});

/* Create Client */
router.post('/', function(req, res, next) {
  var client = new Client();
  client.name = req.body.name;
  client.save(function(err) {
  	if (err) {
  	  res.send(err);
  	} else {
      res.json(client);
  	}
  })
});

module.exports = router;
