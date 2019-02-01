 
const Volunteer = require('./volunteer.models.js');

exports.create = (req, res) => {
	const volunteerForm = new Volunteer({
			organization: req.body.organization || "Untitled Organization",
			role: req.body.role || "Untitled Role",
			cause: req.body.cause || "Untitled cause",
			startDate: req.body.startDate || "Untitled StartDate",
			endDate: req.body.endDate || "Untitled EndDate",
			description: req.body.description || "Untitled Description"
	});
	volunteerForm.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while creating the Volunteer Form."
		});
	});

};


exports.findAll = (req, res) => {
	Volunteer.find()
    .then(volunteer => {
        res.send(volunteer);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving forms."
        });
    });

};