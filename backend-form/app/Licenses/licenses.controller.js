
const License = require('./licenses.models.js');

exports.create = (req, res) => {
	const formLicenses = new License({
		name: req.body.name || "Untitled Name",
		issueOrg: req.body.issueOrg || "Untitled issueOrg",
		issueDate: req.body.issueDate || "Untitled issueDate",
		expireDate: req.body.expireDate || "Untitled expireDate",
		credentialId: req.body.credentialId || "Untitled credentialId",
		credentialUrl: req.body.credentialUrl || "Untitled credentialUrl"
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