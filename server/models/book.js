var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    name: {type: String, unique: true},
    author: {type: String}
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;