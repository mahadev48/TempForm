module.exports = (app) => {
	const forms = require('./volunteer.controller.js');

	app.post('/volunteer', forms.create);
	app.get('/volunteer', forms.findAll);
	
}