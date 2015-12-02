var SightingSchema = require('./SightingSchema');

module.exports = {

	createSighting : function (req, res) {
		var sighting = new SightingSchema(req.body);
		sighting.save().then(function(err, result) {
			return res.status(201).end();
		}, function(err) {
			console.log(err);
			return res.status(500).json(err);
		});
	},

	updateSighting : function (req, res) {
		SightingSchema.update({_id: req.params.id}, req.body, {updatedAt: Date.now}).then(function() {
			return res.status(200).end();
		});
	},

	getSightings : function (req, res) {
		SightingSchema.find().exec().then(function(sightings) {
			return res.json(sightings);
		})
	}



};