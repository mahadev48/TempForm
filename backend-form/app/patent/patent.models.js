const mongoose = require('mongoose');
const patentFormSchema = mongoose.Schema({
							patentTitle: String,
							patentOffice: String,
							patentNumber: String,
							inventor: String,
							fillingDate: String,
							patentUrl: String,
							description: String
						});
module.exports = mongoose.model('Patent', patentFormSchema);