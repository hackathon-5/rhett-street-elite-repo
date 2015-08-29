// models/carrier

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarrierSchema = new Schema({
	name: { type: String, required : true},
	address: { type: String },
	city: { type: String },
	state: { type: String},
	zip: { type: Number },
	phoneNum: { type: String },
	totalRating: { type: Number },
	totalComments: { type: Number },
	averageRating: { type: Number }
});

module.exports = mongoose.model('Carrier', CarrierSchema);