var mongoose = require('mongoose'); 
var ObjectIdSchema = mongoose.Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;

var CompetitionSchema = new mongoose.Schema({
    name: String,
    description: String,
    start_date: Date,
    isOn: { type : Boolean, default : false },
    stages: [ { type: ObjectIdSchema, ref: 'Stage' } ],
    start_times: [ { type: ObjectIdSchema, ref: 'StartTime' } ],
    competition_type : { type: ObjectIdSchema, ref: 'CompetitionType' },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model( 'Competition', CompetitionSchema );