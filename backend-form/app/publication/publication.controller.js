 
const Publication = require('./publication.models.js');

exports.create = (req, res) => {
	const publicationForm = new Publication({
			title: req.body.title || "Untitled title",
			publication: req.body.publication || "Untitled publication",
			day: req.body.day || "Untitled day",
			month: req.body.month || "Untitled month",
			year: req.body.year || "Untitled year",
			publicationUrl: req.body.publicationUrl || "Untitled publicationUrl",
			description: req.body.description || "Untitled description"
	});
	publicationForm.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while creating the Publication Form."
		});
	});

};


exports.findAll = (req, res) => {
	Publication.find()
    .then(publication => {
        res.send(publication);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving forms."
        });
    });
};