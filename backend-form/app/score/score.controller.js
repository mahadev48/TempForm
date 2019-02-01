
const Score = require('./score.models.js');

exports.create = (req, res) => {
	const formScore = new Score({
		testName: req.body.testName || "Untitled testName",
		associatedWith: req.body.associatedWith || "Untitled associatedWith",
		scoreFields: req.body.scoreFields || "Untitled scoreFields",
		month: req.body.month || "Untitled month",
		year: req.body.year || "Untitled year",
		description: req.body.description || "Untitled description"
	});
	formScore.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while creating the Score Form."
		});
	});

};

exports.findAll = (req, res) => {
	Score.find()
    .then(scores => {
        res.send(scores);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving forms."
        });
    });

};