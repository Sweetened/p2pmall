var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var config = require('../config');

var db = mongojs(config.connectionstring);

router.get('/:model', function (req, res) {

    var mycollection = db.collection(req.params.model);

    mycollection.find(function (err, data) {
        res.send(data);
    });
});

module.exports = router;
