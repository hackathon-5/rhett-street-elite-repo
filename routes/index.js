var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {session: req.session});
});

router.get('/users', function(req, res, next) {
  if(req.session.user && req.session.user.role == 'admin') {
    res.render('user_index', {session: req.session});
  } else {
    res.redirect('/');
  }
});

router.get('/users/new', function(req, res, next) {
  if(req.session.user && req.session.user.role == 'admin') {
    res.render('user_new', {session: req.session});
  } else {
    res.redirect('/');
  }
});

router.get('/users/:id', function(req, res, next) {
  if(req.session.user && req.session.user.role == 'admin') {
    res.render('user_edit', {session: req.session, id: req.params.id});
  } else {
    res.redirect('/');
  }
});

router.get('/clients', function(req, res, next) {
  if(req.session.user && req.session.user.role == 'admin') {
    res.render('client_index', {session: req.session});
  } else {
    res.redirect('/');
  }
});

router.get('/clients/new', function(req, res, next) {
  if(req.session.user && req.session.user.role == 'admin') {
    res.render('client_new', {session: req.session});
  } else {
    res.redirect('/');
  }
});

router.get('/clients/:id', function(req, res, next) {
  if(req.session.user && req.session.user.role == 'admin') {
    res.render('client_edit', {session: req.session, id: req.params.id});
  } else {
    res.redirect('/');
  }
});

router.get('/carriers', function(req, res, next) {
  if(req.session.user && req.session.user.role == 'admin') {
    res.render('carrier_index', {session: req.session});
  } else {
    res.redirect('/');
  }
});

router.get('/carriers/new', function(req, res, next) {
  if(req.session.user && req.session.user.role == 'admin') {
    res.render('carrier_new', {session: req.session});
  } else {
    res.redirect('/');
  }
});

router.get('/carriers/:id', function(req, res, next) {
  if(req.session.user && req.session.user.role == 'admin') {
    res.render('carrier_edit', {session: req.session, id: req.params.id});
  } else {
    res.redirect('/');
  }
});

router.get('/sign-up', function(req, res, next) {
  res.render('sign-up', { session: req.session });
});

router.get('/login', function(req, res, next) {
  if (req.session && req.session.user) {
    res.redirect('/');
  }
  res.render('login', {session: req.session });
});

module.exports = router;
