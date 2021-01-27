var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Welcome to the Carpenter's Group Technical Test. This is proof that the back-emd is running - Ian" });
});

module.exports = router;
