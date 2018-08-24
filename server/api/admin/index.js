var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.post('/login', controller.login)

router.post('/addUser', controller.addUser);
router.post('/addBook', controller.addBook);

router.get('/getAvaliations', controller.getAvaliations);

module.exports = router;