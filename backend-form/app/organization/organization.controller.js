
const Organization = require('./organization.models.js');

exports.create = (req, res) => {
	const formOrganization = new Organization({
		name: req.body.name || "Untitled name",
		position: req.body.position || "Untitled position",
		associatedWith: req.body.associatedWith || "Untitled associatedWith",
		fromMonth: req.body.fromMonth || "Untitled fromMonth",
		fromYear: req.body.fromYear || "Untitled fromYear",
		toMonth: req.body.toMonth || "Untitled toMonth",
		toYear: req.body.toYear || "Untitled toYear",
		description: req.body.description || "Untitled description"
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