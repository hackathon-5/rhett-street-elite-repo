var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/sign-up', function(req, res, next) {
    res.render('sign-up', { session: req.session });
});

module.exports = router;