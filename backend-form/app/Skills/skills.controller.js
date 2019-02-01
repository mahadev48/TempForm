 
const Skill = require('./skills.models.js');

exports.create = (req, res) => {
	const skillForm = new Skill({
			skillField: req.body.skillField || "Untitled skillField"
	});
	skillForm.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while creating the Skill Form."
		});
	});

};


exports.findAll = (req, res) => {
	Skill.find()
    .then(skill => {
        res.send(skill);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving forms."
        });
    });
};