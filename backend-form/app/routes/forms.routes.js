module.exports = (app) => {
	const forms = require('../controllers/form.controller.js');

	app.post('/forms', forms.create);
	app.get('/forms', forms.findAll);
	app.get('/forms/:formsId', forms.findOne);
	app.put('/forms/:formsId', forms.update);
	app.delete('./forms/:formsId', forms.delete);
}