var express = require('express');
var router = express.Router();

// get the express page
router.get('/login', function(req, res, next) {
    if (req.session && req.session.user) {
        res.redirect('/');
    }
    res.render('login', {session: req.session });
});

module.exports = router;