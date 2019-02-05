 
const Volunteer = require('./volunteer.models.js');

exports.create = (req, res) => {
	const volunteerForm = new Volunteer({
			organi: req.body.organi || "Untitled organi",
			role: req.body.role || "Untitled role",
			cause: req.body.cause || "Untitled cause",
			monthSelect: req.body.monthSelect || "Untitled monthSelect",
			monthSelect1: req.body.monthSelect1 || "Untitled monthSelect1",
			yearSelect: req.body.yearSelect || "Untitled yearSelect",
			yearSelect1: req.body.yearSelect1 || "Untitled yearSelect1",
			descri: req.body.descri || "Untitled descri"
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