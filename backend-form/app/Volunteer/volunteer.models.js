const mongoose = require('mongoose');
const volunteerFormSchema = mongoose.Schema({
							organization: String,
							role: String,
							cause: String,
							startDate: String,
							endDate: String,
							description: String
						});
module.exports = mongoose.model('Volunteer', volunteerFormSchema);

