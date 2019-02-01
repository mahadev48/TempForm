
const Project = require('./project.models.js');

exports.create = (req, res) => {
	const formProject = new Project({
		projectName: req.body.projectName || "Untitled projectName",
		startDate: req.body.startDate || "Untitled startDate",
		endDate: req.body.endDate || "Untitled endDate",
		creator: req.body.creator || "Untitled creator",
		associatedWith: req.body.associatedWith || "Untitled associatedWith",
		projectUrl: req.body.projectUrl || "Untitled projectUrl",
		description: req.body.description || "Untitled description"
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