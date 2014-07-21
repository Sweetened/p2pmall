var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var config = require('../config');

var connectionstring = config.connectionstring;
var collections = config.collections;

var db = mongojs(connectionstring, collections);

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
