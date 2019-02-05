const mongoose = require('mongoose');
const expFormsSchema = mongoose.Schema({
					title: String,
					role: String,
					location: String,
					month: String,
					years: String,
					headline: String,
					description: String
					});
module.exports = mongoose.model('Experience', expFormsSchema);