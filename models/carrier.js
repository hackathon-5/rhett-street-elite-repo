// models/carrier

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarrierSchema = new Schema({
	name: { type: String, required : true},
});

module.exports = mongoose.model('Carrier', CarrierSchema);