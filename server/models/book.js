var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    nome: {type: String},
    autor: {type: String}
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;