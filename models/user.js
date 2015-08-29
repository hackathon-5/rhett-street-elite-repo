// models/user

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var UserSchema = new Schema({
  name: { type: String, required : true},
  email: { type: String, unique : true, required : true, dropDups: true},
  password: { type: String },
  role: { type: String, enum: ['carrier.', 'client', 'admin']},
  carrierId: ObjectId,
  clientId: ObjectId
});

module.exports = mongoose.model('User', UserSchema);