// models/quote

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var QuoteSchema = new Schema({
  ammount: { type: Number, required: true},
  approved: { type: Boolean, required: true},
  carrierId: { type: ObjectId, required: true},
  carrierName: { type: String, required: true}
});

module.exports = mongoose.model('Quote', QuoteSchema);