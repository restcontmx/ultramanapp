var mongoose = require('mongoose'); 
var ObjectIdSchema = mongoose.Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;

var RegistrationSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    bio: String,
    age: Number,
    competitor_number: Number,
    sex: Number,
    team: String,
    category: { type: ObjectIdSchema, ref: 'Category' },
    competition : { type: ObjectIdSchema, ref: 'Competition' },
    timestamp: { type: Date, default: Date.now },
    rounds: [ { type: ObjectIdSchema, ref: 'Round' } ]
});

module.exports = mongoose.model( 'Registration', RegistrationSchema );