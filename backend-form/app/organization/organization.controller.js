
const Organization = require('./organization.models.js');

exports.create = (req, res) => {
	const formOrganization = new Organization({
		name: req.body.name || "Untitled name",
		post: req.body.post || "Untitled post",
		associat: req.body.associat || "Untitled associat",
		monthSelect: req.body.monthSelect || "Untitled monthSelect",
		monthSelect1: req.body.monthSelect1 || "Untitled monthSelect1",
		yearSelect: req.body.yearSelect || "Untitled yearSelect",
		yearSelect1: req.body.yearSelect1 || "Untitled yearSelect1",
		descri: req.body.descri || "Untitled descri"
	});
	formOrganization.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while creating the Organization Form."
		});
	});

};

exports.findAll = (req, res) => {
	Organization.find()
    .then(organizations => {
        res.send(organizations);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving forms."
        });
    });

};