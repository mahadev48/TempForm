const mongoose = require('mongoose');
const organizationFormSchema = mongoose.Schema({
						name: String,
						post: String,
						associat: String,
						monthSelect: String,
						monthSelect1: String,
						yearSelect: String,
						yearSelect1: String,
						descri: String
						});
module.exports = mongoose.model('Organization', organizationFormSchema);