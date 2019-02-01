module.exports = (app) => {
	const forms = require('./honors.controller.js');

	app.post('/honors', forms.create);
	app.get('/honors', forms.findAll);
	
}