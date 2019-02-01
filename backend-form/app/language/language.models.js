const mongoose = require('mongoose');
const languageFormSchema =  mongoose.Schema({
							language: String,
							proficiency: String
							});
module.exports = mongoose.model('Language', languageFormSchema);