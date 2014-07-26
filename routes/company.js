var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('company', { title: '行业宝典' });
});

module.exports = router;
