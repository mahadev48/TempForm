module.exports = (app) => {
	const forms = require('./score.controller.js');

	app.post('/score', forms.create);
	app.get('/score', forms.findAll);
	
}