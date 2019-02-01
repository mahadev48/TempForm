module.exports = (app) => {
	const forms = require('./skills.controller.js');

	app.post('/skill', forms.create);
	app.get('/skill', forms.findAll);
	
}