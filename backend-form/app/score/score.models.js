const mongoose = require('mongoose');
const scoreFormSchema = mongoose.Schema({
						testName: String,
						associatedWith: String,
						scoreFields: String,
						month: String,
						year: String,
						description: String
						});
module.exports = mongoose.model('Score', scoreFormSchema);