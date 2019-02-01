const mongoose = require('mongoose');
const skillsFormSchema = mongoose.Schema({
							skillField: String
						});
module.exports = mongoose.model('Skills', skillsFormSchema);

