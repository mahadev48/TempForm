module.exports = (app) => {
	const forms = require('./course.controller.js');

	app.post('/course', forms.create);
	app.get('/course', forms.findAll);
	
}