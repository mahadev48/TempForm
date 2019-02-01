module.exports = (app) => {
	const forms = require('./education.controller.js');

	app.post('/education', forms.create);
	app.get('/education', forms.findAll);
	
}