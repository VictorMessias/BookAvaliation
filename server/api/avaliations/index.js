var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.post('/addAvaliation', controller.addAvaliation);

module.exports = router;