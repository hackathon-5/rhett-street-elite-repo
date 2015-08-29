// models/shipment

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var ShipmentSchema = new Schema({
  origin: { type: String, required: true },
  destination: { type: String, required: true},
  pickupDate: { type: Date, required: true},
  deliveryDate: { type: Date, required: true},
  weight: { type: Number, required: true},
  status: { type: String, enum: ['booked', 'in-transit', 'delivered']},
  clientId: ObjectId,
  carrierId: ObjectId
});

module.exports = mongoose.model('Shipment', ShipmentSchema);