const mongoose = require('mongoose');
const formsSchema = mongoose.Schema({
	firstName: String,
	lastName: String,
	headline: String,
	education: String,
	country: String,
	state: String,
	city: String,
	industry: String,
	summery: String
});
module.exports = mongoose.model('Form', formsSchema);