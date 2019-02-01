const mongoose = require('mongoose');
const courseFormSchema = mongoose.Schema({
						courseName: String,
						number: String,
						associatedWith: String
						});
module.exports = mongoose.model('Course', courseFormSchema);