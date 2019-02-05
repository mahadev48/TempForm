const mongoose = require('mongoose');
const educationSchema = mongoose.Schema({
					school: String,
					degree: String,
					studyField: String,
					grade: String,
					activities: String,
					fromYear: String,
					toYears: String,
					description: String
					});
module.exports = mongoose.model('Education', educationSchema);