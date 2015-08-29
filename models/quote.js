// models/quote

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var QuoteSchema = new Schema({
  amount: { type: Number, required: true},
  carrierId: { type: ObjectId, required: true},
  shipmentId: { type: ObjectId, required: true}
});

module.exports = mongoose.model('Quote', QuoteSchema);