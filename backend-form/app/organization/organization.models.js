const mongoose = require('mongoose');
const organizationFormSchema = mongoose.Schema({
						name: String,
						position: String,
						associatedWith: String,
						fromMonth: String,
						fromYear: String,
						toMonth: String,
						toYear: String,
						description: String
						});
module.exports = mongoose.model('Organization', organizationFormSchema);