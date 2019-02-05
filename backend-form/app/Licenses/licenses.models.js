const mongoose = require('mongoose');
const licensesFormSchema = mongoose.Schema({
						   name: String,
						   issue: String,
						   monthSelect: String,
						   monthSelect1: String,
						   yearSelect: String,
						   yearSelect1: String,
						   credId: String,
						   credUrl: String,	
						});
module.exports = mongoose.model('Licenses', licensesFormSchema);