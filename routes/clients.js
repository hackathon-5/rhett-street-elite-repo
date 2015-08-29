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

router.get('/:id', function(req, res, next) {
  Client.findById(req.params.id, function(err, client) {
    if (err)
      res.send(err);
    res.json(client);
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

router.put('/:id', function(req, res, next) {
  Client.findById(req.params.id, function(err, client) {
    if (err)
      res.send(err);
    client.name = req.body.name;
    client.save(function (err) {
      if (err)
        res.send(err);
      res.json(user);
    });
  });
});

/* Update user */
router.delete('/:id', function(req, res, next) {
  Client.findById(req.params.id, function(err, client) {
    if (err)
      res.send(err);
    client.remove(function(err) {
      if (err)
        res.send(err);
      res.json({ "success": true });
    });
  });
});

module.exports = router;
