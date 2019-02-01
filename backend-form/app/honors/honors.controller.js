
const Honors = require('./honors.models.js');

exports.create = (req, res) => {
	const formHonors = new Honors({
		title: req.body.title || "Untitled title",
		associatedWith: req.body.associatedWith || "Untitled associatedWith",
		issuer: req.body.issuer || "Untitled issuer",
		month: req.body.month || "Untitled month",
		year: req.body.year || "Untitled year",
		description: req.body.description || "Untitled description"
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