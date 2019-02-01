
const Course = require('./course.models.js');

exports.create = (req, res) => {
	const formCourse = new Course({
		courseName: req.body.courseName || "Untitled courseName",
		number: req.body.number || "Untitled number",
		associatedWith: req.body.associatedWith || "Untitled associatedWith"
	});
	formCourse.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while creating the Course Form."
		});
	});

};

exports.findAll = (req, res) => {
	Course.find()
    .then(course => {
        res.send(course);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving forms."
        });
    });

};