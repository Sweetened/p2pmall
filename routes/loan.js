var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('loan', { title: '我要贷款' });
});

module.exports = router;
