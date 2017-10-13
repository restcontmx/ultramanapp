var mongoose = require('mongoose'); 
var ObjectIdSchema = mongoose.Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;

var CategorySchema = new mongoose.Schema({
    name: String,
    description: String,
    age_1: Number,
    age_2: Number,
    sex: { type: Number, default: 0 },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model( 'Category', CategorySchema );