const mongoose = require('mongoose');
const honorsFormSchema = mongoose.Schema({
						title: String,
						associatedId: String,
						issuer: String,
						monthSelect: String,
						yearSelect: String,
						descriptionBox: String
						});
module.exports = mongoose.model('Honors', honorsFormSchema);