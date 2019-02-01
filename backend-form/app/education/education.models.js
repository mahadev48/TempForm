const mongoose = require('mongoose');
const educationSchema = mongoose.Schema({
					school: String,
					degree: String,
					fieldStudy: String,
					grade: String,
					activities: String,
					fromYear: String,
					toYear: String,
					description: String
					});
module.exports = mongoose.model('Education', educationSchema);