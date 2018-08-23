var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var avaliationSchema = new Schema({
    livroID: {type: Schema.ObjectId, ref: 'Book'},
    estado: {type: String},
    nota: {type: Number},
    obs: {type: String}
});

var Avaliation = mongoose.model('Avaliation', avaliationSchema);

module.exports = Avaliation;