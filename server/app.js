var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var configConnection = require('./configBD');

var user = require('./api/user');
var livros = require('./api/livros');
var avaliations = require('./api/avaliations');
var admin = require('./api/admin');

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

app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/views/index.html'));
});

app.get('/success', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/views/index.html'));
});

app.get('/admin', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/views/index.html'));
});

app.get('/dashboard', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/views/index.html'));
});



app.use('/api/user', user);
app.use('/api/livros', livros);
app.use('/api/avaliation', avaliations);
app.use('/api/admin', admin);

module.exports = router;