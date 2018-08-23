var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

var auth = require('./api/user');

var app = express();
var router = express.Router();

var port = process.env.PORT || 3000;

var http = require('http').Server(app);
var listen = http.listen(port);


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/views/index.html'));
});


app.use('/asdasd', auth);

module.exports = router;