
const Honors = require('./honors.models.js');

exports.create = (req, res) => {
	const formHonors = new Honors({
		title: req.body.title || "Untitled title",
		associatedId: req.body.associatedId || "Untitled associatedId",
		issuer: req.body.issuer || "Untitled issuer",
		monthSelect: req.body.monthSelect || "Untitled monthSelect",
		yearSelect: req.body.yearSelect || "Untitled yearSelect",
		descriptionBox: req.body.descriptionBox || "Untitled descriptionBox"
	});
	formHonors.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while creating the Honors Form."
		});
	});

};

exports.findAll = (req, res) => {
	Honors.find()
    .then(honor => {
        res.send(honor);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving forms."
        });
    });

};