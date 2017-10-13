var mongoose = require('mongoose'); 
var ObjectIdSchema = mongoose.Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;

var StartTimeSchema = new mongoose.Schema({
    name: String,
    date: { type: String, default:"00:00:00" },
    state: { type: Boolean, default: false }
});

module.exports = mongoose.model( 'StartTime', StartTimeSchema )