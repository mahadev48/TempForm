const mongoose = require('mongoose');
const formsSchema = mongoose.Schema({
					firstName: String,
					lastName: String,
					headLine: String,
					educationList: String,
					country: String,
					state: String,
					cityList: String,
					industry: String,
					contactInfo: String,
					summary: String
					});
module.exports = mongoose.model('Form', formsSchema);