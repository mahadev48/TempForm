const mongoose = require('mongoose');
const publicationFormSchema = mongoose.Schema({
							title: String,
							publisher: String,
							day: String,
							month: String,
							year: String,
							publicationDate: String,
							description: String
						});
module.exports = mongoose.model('Publication', publicationFormSchema);