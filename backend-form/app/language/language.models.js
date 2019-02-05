const mongoose = require('mongoose');
const languageFormSchema =  mongoose.Schema({
							lang: String,
							proficiency: String
							});
module.exports = mongoose.model('Language', languageFormSchema);