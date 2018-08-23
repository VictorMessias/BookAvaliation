var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var avaliations = mongoose.Schema({
    avaliationID: {type: Schema.ObjectId, ref: 'Avaliation'},
    bookID: {type: Schema.ObjectId, ref: 'Book'}
},{ _id : false });

var userSchema = new Schema({
    name: {type: String, trime: true, require: true},
    username: {type: String, unique: true},
    password: {type: String},
    admin: {type: Boolean},
    avaliations: [avaliations]
});

var User = mongoose.model('User', userSchema);

module.exports = User;