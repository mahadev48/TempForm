module.exports = (app) => {
	const forms = require('./organization.controller.js');

	app.post('/organization', forms.create);
	app.get('/organization', forms.findAll);
	
}