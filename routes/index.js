var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {session: req.session});
});

router.get('/users', function(req, res, next) {
  if(req.session.user) {
    res.render('user_index', {session: req.session});
  } else {
    res.redirect('/');
  }
});

router.get('/users/:id', function(req, res, next) {
  if(req.session.user) {
    res.render('user_edit', {session: req.session, id: req.params.id});
  } else {
    res.redirect('/');
  }
});

router.get('/clients', function(req, res, next) {
  if(req.session.user) {
    res.render('client_index', {session: req.session});
  } else {
    res.redirect('/');
  }
});

router.get('/clients/:id', function(req, res, next) {
  if(req.session.user) {
    res.render('client_edit', {session: req.session, id: req.params.id});
  } else {
    res.redirect('/');
  }
});

router.get('/carriers', function(req, res, next) {
  if(req.session.user) {
    res.render('carrier_index', {session: req.session});
  } else {
    res.redirect('/');
  }
});

router.get('/carriers/:id', function(req, res, next) {
  if(req.session.user) {
    res.render('carrier_edit', {session: req.session, id: req.params.id});
  } else {
    res.redirect('/');
  }
});

module.exports = router;
