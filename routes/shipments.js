var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Carrier = require('../models/carrier.js');
var Comment = require('../models/comment.js');
var Shipment = require('../models/shipment.js');

/* create shipment */
router.post('/', function(req, res, next) {
  var shipment = new Shipment();
  shipment.origin = req.body.origin;
  shipment.destination = req.body.destination;
  shipment.pickupDate = req.body.pickupDate;
  shipment.deliveryDate = req.body.deliveryDate;
  shipment.weight = req.body.weight;
  shipment.status = req.body.status;
  shipment.clientId = req.body.clientId;
  shipment.carrierId = req.body.carrierId;
  shipment.save(function(err) {
  if (err) {
    res.send(err);
  } else {
    res.json(shipment);
  }
  });
});

/* get shipments per client */
router.get('/list/client/:clientId', function(req, res, next) {
  Shipment.find({ clientId: req.params.clientId }, function(err, shipment) {
    if (err)
      res.send(err);
    res.json(shipment);
  });
});

/* get shipments per carrier */
router.get('/list/carrier/:carrierId', function(req, res, next) {
  Shipment.find({ carrierId: req.params.carrierId }, function(err, shipment) {
    if (err)
      res.send(err);
    res.json(shipment);
  });
});

/* get shipment */
router.get('/:id', function(req, res, next) {
  Shipment.findById(req.params.id, function(err, shipment) {
    if (err)
      res.send(err);
    res.json(shipment);
  });
});

/* update shipment */
router.put('/:id', function(req, res, next) {
  Shipment.findById(req.params.id, function(err, shipment) {
    if (err)
      res.send(err);
    shipment.origin = req.body.origin;
    shipment.destination = req.body.destination;
    shipment.pickupDate = req.body.pickupDate;
    shipment.deliveryDate = req.body.deliveryDate;
    shipment.weight = req.body.weight;
    shipment.status = req.body.status;
    shipment.clientId = req.body.clientId;
    shipment.carrierId = req.body.carrierId;
    shipment.save(function(err) {
    if (err) {
      res.send(err);
    } else {
      res.json(shipment);
    }
    });
  });
});

/* delete shipment */
router.delete('/:id', function(req, res, next) {
  Shipment.findById(req.params.id, function(err, shipment) {
    if (err)
      res.send(err);
    shipment.remove(function(err) {
      if (err)
        res.send(err);
      res.json({ "success": true });
    });
  });
});

module.exports = router;