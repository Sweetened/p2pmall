var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('invest', { title: '我要投资' });
});

module.exports = router;
