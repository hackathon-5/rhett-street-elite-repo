var express = require('express');
var router = express.Router();

// get the express page
router.get('/login', function(req, res, next) {
    res.render('login', {session: req.session });
});

module.exports = router;