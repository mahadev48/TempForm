
const Project = require('./project.models.js');

exports.create = (req, res) => {
	const formProject = new Project({
		projectName: req.body.projectName || "Untitled projectName",
		monthSelect: req.body.monthSelect || "Untitled monthSelect",
		monthSelect1: req.body.monthSelect1 || "Untitled monthSelect1",
		yearSelect: req.body.yearSelect || "Untitled yearSelect",
		yearSelect1: req.body.yearSelect1 || "Untitled yearSelect1",
		creatorName: req.body.creatorName || "Untitled creatorName",
		associatedWith: req.body.associatedWith || "Untitled associatedWith",
		projectUrl: req.body.projectUrl || "Untitled projectUrl",
		descriptionBox: req.body.descriptionBox || "Untitled descriptionBox"
	});
	formProject.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while creating the Project Form."
		});
	});

};

exports.findAll = (req, res) => {
	Project.find()
    .then(project => {
        res.send(project);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving forms."
        });
    });

};