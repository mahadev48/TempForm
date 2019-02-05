
const Language = require('./language.models.js');

exports.create = (req, res) => {
	const formLanguage = new Language({
		lang: req.body.lang || "Untitled lang",
		proficiency: req.body.proficiency || "Untitled proficiency"
	});
	formLanguage.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while creating the Language Form."
		});
	});

};

exports.findAll = (req, res) => {
	Language.find()
    .then(languages => {
        res.send(languages);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving forms."
        });
    });

};