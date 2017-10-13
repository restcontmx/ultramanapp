var mongoose = require('mongoose'); 
var ObjectIdSchema = mongoose.Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;

var RoundSchema = new mongoose.Schema({
    time: { type: String, default : '00:00:00' },
    stage: { type: ObjectIdSchema, ref: 'Stage' }
});

module.exports = mongoose.model( 'Round', RoundSchema );