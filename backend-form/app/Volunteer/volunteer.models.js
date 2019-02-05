const mongoose = require('mongoose');
const volunteerFormSchema = mongoose.Schema({
							organi: String,
							role: String,
							cause: String,
							monthSelect: String,
							monthSelect1: String,
							yearSelect: String,
							yearSelect1: String,
							descri: String
						});
module.exports = mongoose.model('Volunteer', volunteerFormSchema);

