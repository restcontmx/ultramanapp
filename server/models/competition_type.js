var mongoose = require('mongoose'); 
var ObjectIdSchema = mongoose.Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;

var CompetitionTypeSchema = new mongoose.Schema({
    name: String,
    distance : Number,
    value : Number,
    timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model( 'CompetitionType', CompetitionTypeSchema );