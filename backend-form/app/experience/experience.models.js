const mongoose = require('mongoose');
const expFormsSchema = mongoose.Schema({
					title: String,
					role: String,
					location: String,
					from: String,
					present: String,
					headline: String,
					description: String
					});
module.exports = mongoose.model('Experience', expFormsSchema);