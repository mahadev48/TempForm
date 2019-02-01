module.exports = (app) => {
	const forms = require('./licenses.controller.js');
	app.post('/licenses', forms.create);
	app.get('/licenses', forms.findAll);
}