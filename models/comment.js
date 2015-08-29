// models/comments

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var CommentSchema = new Schema({
  userName: { type: String, required : true },
  text: { type: String, required : true },
  rating: { type: Number, required: true },
  carrierId: { type : ObjectId, required: true },
  userId: { type: ObjectId, required: true }
});

module.exports = mongoose.model('Comment', CommentSchema);