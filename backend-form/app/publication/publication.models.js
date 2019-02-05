const mongoose = require('mongoose');
const publicationFormSchema = mongoose.Schema({
							title: String,
							publication: String,
							day: String,
							month: String,
							year: String,
							publicationUrl: String,
							description: String
						});
module.exports = mongoose.model('Publication', publicationFormSchema);