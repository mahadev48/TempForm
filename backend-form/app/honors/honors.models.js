const mongoose = require('mongoose');
const honorsFormSchema = mongoose.Schema({
						title: String,
						associatedWith: String,
						issuer: String,
						month: String,
						year: String,
						description: String
						});
module.exports = mongoose.model('Honors', honorsFormSchema);