var mongoose = require('mongoose'); 

var StageTypeSchema = new mongoose.Schema({
    name : String
});

module.exports = mongoose.model( 'StageType', StageTypeSchema );