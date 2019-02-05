 
const Skill = require('./skills.models.js');

exports.create = (req, res) => {
	console.log(req);
	const skillForm = new Skill({
			addSkills: req.body.addSkills || "Untitled Add Skills"
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