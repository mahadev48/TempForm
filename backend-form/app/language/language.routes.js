module.exports = (app) => {
	const forms = require('./language.controller.js');

	app.post('/language', forms.create);
	app.get('/language', forms.findAll);
	
}