var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs("mongodb://p2pmall:paic1234@kahana.mongohq.com:10026/p2pmall", ["invests","loans"]);

router.get('/invests', function (req, res) {
    db.invests.find(function (err, docs) {
        res.send(docs);
    });
});
router.get('/loans', function (req, res) {
    db.loans.find(function (err, docs) {
        res.send(docs);
    });
});

module.exports = router;
