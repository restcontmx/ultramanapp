var mongoose = require('mongoose'); 
var ObjectIdSchema = mongoose.Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;

var StageSchema = new mongoose.Schema({
    name : String,
    rounds : { type: Number, default: 1 },
    stage_type : { type: ObjectIdSchema, ref: 'StageType' },
    start_time : { type: ObjectIdSchema, ref: 'StartTime' }
});

module.exports = mongoose.model( 'Stage', StageSchema );