module.exports = (app) => {
	const forms = require('./experience.controller.js');

	app.post('/expForm', forms.create);
	app.get('/expForm', forms.findAll);
	
}