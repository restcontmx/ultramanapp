var mongoose = require('mongoose'); 
var ObjectIdSchema = mongoose.Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;

var SetupSchema = new mongoose.Schema({
    valid : Boolean,
    key : String,
    first_name : String,
    last_name : String,
    email : String,
    password : String,
    username : String
});

module.exports = mongoose.model( 'Setup', SetupSchema );