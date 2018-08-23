var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/getLivros', controller.getLivros);

module.exports = router;