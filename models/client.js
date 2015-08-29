// models/client

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClientSchema = new Schema({
	name: { type: String, required : true},
});

module.exports = mongoose.model('Client', ClientSchema);