const mongoose = require('mongoose');
const projectFormSchema = mongoose.Schema({
						projectName: String,
						startDate: String,
						endDate: String,
						creator: String,
						associatedWith: String,
						projectUrl: String,
						description: String
						});
module.exports = mongoose.model('Project', projectFormSchema);