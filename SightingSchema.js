var mongoose = require('mongoose');

var SightingSchema = mongoose.model('SightingSchema', new mongoose.Schema({
	name: {type: String, lowercase: true, index: true, required: true},
	order: {type: String, maxlength: 20, index: true} , 
	status: {type: String, lowercase: true, enum: ['extinct', 'endangered', 'hunted'], index: true},
	numberSeen: {type: Number, min: 1} ,
	confirmed: {type: Boolean, default: false} ,
	// timestamp: {createdAt: 'created_at', udpatedAt: 'updated-at'}
}));

module.exports = SightingSchema;