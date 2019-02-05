const mongoose = require('mongoose');
const skillsFormSchema = mongoose.Schema({
							addSkills: String
						});
module.exports = mongoose.model('Skills', skillsFormSchema);

