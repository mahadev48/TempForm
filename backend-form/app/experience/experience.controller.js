
const Experience = require('./experience.models.js');


exports.create = (req, res) => {
    // console.log(req.body);
	const formExp = new Experience({
		title: req.body.title || "Untitled title",
		role: req.body.role || "Untitled role",
		location: req.body.location || "Untitled location",
		month: req.body.month || "Untitled month",
		years: req.body.years || "Untitled years",
		headline: req.body.headline || "Untitled headline",
		description: req.body.description || "Untitled description"
	});
	formExp.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while creating the Experience Form."
		});
	});

};


exports.findAll = (req, res) => {
	Experience.find()
    .then(experience => {
        res.send(experience);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving forms."
        });
    });

};