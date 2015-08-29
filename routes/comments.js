var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Carrier = require('../models/carrier.js');
var Comment = require('../models/comment.js');

/* create comment */
router.post('/', function(req, res, next) {
  var comment = new Comment();
  comment.userName = req.body.userName;
  comment.text = req.body.text;
  comment.rating = req.body.rating;
  comment.carrierId = req.body.carrierId;
  comment.userId = req.body.userId;

  comment.save(function(err) {
    if (err)
      res.send(err);
    Carrier.findOne({_id: comment.carrierId}, function(err, carrier) {
      if(err)
        res.send(err);
      carrier.totalComments += 1;
      carrier.totalRating += parseInt(comment.rating);
      carrier.averageRating = carrier.totalRating / carrier.totalComments;
      carrier.save(function(err) {
        if(err)
          res.send(err);
        res.json(comment);
      })
    });
  });
});

/* get all comments for a carrier */
router.get('/list/:carrier', function(req, res, next) {
  Comment.find({ carrierId: req.params.carrier }, function(err, comments) {
    if (err)
      res.send(err);
    res.json(comments);
  });
});

/* delete comments */
router.delete('/:id', function(req, res, next) {
    Comment.findById(req.params.id, function(err, comment) {
        if (err) {
            res.send(err);
        }
        Carrier.findOne({_id: comment.carrierId}, function(err, carrier) {
            if (err) {
                res.send(err);
            }
            carrier.totalComments -= 1;
            carrier.totalRating -= parseInt(comment.rating);
            carrier.averageRating = carrier.totalRating / carrier.totalComments;
            carrier.save(function(err) {
                if(err) {
                    res.send(err);
                }
            });
        });
        comment.remove(function(err) {
            if (err) {
                res.send(err);
            }

            res.json({ "success": true });
        });
    });
});

module.exports = router;
