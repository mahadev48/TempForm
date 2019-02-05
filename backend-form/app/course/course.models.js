const mongoose = require('mongoose');
const courseFormSchema = mongoose.Schema({
						courseName: String,
						numberId: String,
						associatedWith: String
						});
module.exports = mongoose.model('Course', courseFormSchema);