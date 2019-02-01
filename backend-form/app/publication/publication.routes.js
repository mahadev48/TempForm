module.exports = (app) => {
	const forms = require('./publication.controller.js');

	app.post('/publication', forms.create);
	app.get('/publication', forms.findAll);
	
}