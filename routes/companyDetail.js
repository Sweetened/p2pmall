var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('companyDetail', { title: '行业详情' });
});

module.exports = router;
