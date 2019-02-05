const mongoose = require('mongoose');
const projectFormSchema = mongoose.Schema({
						projectName: String,
						monthSelect: String,
						monthSelect1: String,
						yearSelect: String,
						yearSelect1: String,
						creatorName: String,
						associatedWith: String,
						projectUrl: String,
						descriptionBox: String
						});
module.exports = mongoose.model('Project', projectFormSchema);