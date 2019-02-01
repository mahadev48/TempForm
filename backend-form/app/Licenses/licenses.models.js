const mongoose = require('mongoose');
const licensesFormSchema = mongoose.Schema({
						   name: String,
						   issueOrg: String,
						   issueDate: String,
						   expireDate: String,
						   credentialId: String,
						   credentialUrl: String,	
						});
module.exports = mongoose.model('Licenses', licensesFormSchema);