
const License = require('./licenses.models.js');

exports.create = (req, res) => {
	const formLicenses = new License({
		name: req.body.name || "Untitled Name",
		issue: req.body.issue || "Untitled issue",
		monthSelect: req.body.monthSelect || "Untitled monthSelect",
		monthSelect1: req.body.monthSelect1 || "Untitled monthSelect1",
		yearSelect: req.body.yearSelect || "Untitled yearSelect",
		yearSelect1: req.body.yearSelect1 || "Untitled yearSelect1",
		credId: req.body.credId || "Untitled credId",
		credUrl: req.body.credUrl || "Untitled credUrl",
	});

	formLicenses.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while creating the Experience Form."
		});
	});
}

exports.findAll = (req, res) =>{
	License.find()
	.then(licnses => {
		res.send(licnses);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while retrieving forms."
		});
	});
}	