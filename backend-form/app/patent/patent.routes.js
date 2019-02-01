module.exports = (app) => {
	const forms = require('./patent.controller.js');

	app.post('/patent', forms.create);
	app.get('/patent', forms.findAll);
	
}