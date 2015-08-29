var express = require('express');
var router = express.Router();
var Quote = require('../models/quote.js');

/* Create Quote */
router.post('/', function(req, res, next) {
  var quote = new Quote();
  quote.ammount = req.body.ammount;
  quote.approved = req.body.approved;
  quote.carrierId = req.body.carrierId;
  quote.carrierName = req.body.carrierName;

  quote.save(function(err) {
  	if (err) {
  	  res.send(err);
  	} else {
      res.json(quote);
  	}
  });
});

/* Delete Quote */
router.delete('/', function(req, res, next) {
  Quote.findById(req.params.id, function(err, quote) {
    if (err)
      res.send(err);
    quote.remove(function(err) {
      if (err)
        res.send(err);
      res.json({ "success": true });
    });
  });
});

/* Update Quote */
router.put('/', function(req, res, next) {
  Quote.findById(req.params.id, function(err, quote) {
    if (err)
      res.send(err);
    quote.ammount = req.body.ammount;
    quote.approved = req.body.approved;
    quote.carrierId = req.body.carrierId;
    quote.carrierName = req.body.carrierName;
    quote.save(function(err) {
      if (err)
        res.send(err);
      res.json({ "success": true });
    });
  });
});

/* Get quote */
router.get('/id', function(req, res, next) {
  Quote.findById(req.params.id, function(err, quote) {
    if (err)
      res.send(err);
    res.json(quote);
  });
});

/* List Quotes by shipment */
router.get('/list/shipment/:shipmentId', function(req, res, next) {
  Quote.find({ shipmentId: req.params.shipmentId, function(err, quotes) {
    if (err)
      res.send(err);
    res.json(quotes);
  });
});

/* List Quotes by carrier */
router.get('/list/shipment/:carrierId', function(req, res, next) {
  Quote.find({ carrierId: req.params.carrierId, function(err, quotes) {
    if (err)
      res.send(err);
    res.json(quotes);
  });
});

module.exports = router;