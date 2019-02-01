module.exports = (app) => {
	const forms = require('./project.controller.js');

	app.post('/project', forms.create);
	app.get('/project', forms.findAll);
	
}