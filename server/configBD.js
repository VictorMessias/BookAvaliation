var mongoose = require('mongoose');
var config = {};

config.mongoUri = 'mongodb://localhost:27017/aktienow';
config.cookieMaxAge = 30 * 24 * 3600 * 1000;

mongoose.connect(config.mongoUri);
mongoose.connection.on('connectd', function(){
  console.log("Mongo connected");
});

mongoose.connection.on('error', function(err){
  console.log("Mongo connection throws an error:" + err);
});

mongoose.connection.on('disconnected', function(err){
  console.log("Mongo connection desconnected");
});

process.on('SIGINT', function(){
  mongoose.connection.close(function(){
    process.exit(0);
  });
});

module.exports = config;