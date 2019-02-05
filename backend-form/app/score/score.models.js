const mongoose = require('mongoose');
const scoreFormSchema = mongoose.Schema({
						testName: String,
						associatedWith: String,
						scoreBox: String,
						month: String,
						year: String,
						descriptionBox: String
						});
module.exports = mongoose.model('Score', scoreFormSchema);
