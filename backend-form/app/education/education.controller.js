 
const Education = require('./education.models.js');

exports.create = (req, res) => {
    // console.log("insert forms");
    // console.log(req.body);
	const eduForm = new Education({
			school: req.body.school || "Untitled school",
			degree: req.body.degree || "Untitled degree",
			studyField: req.body.studyField || "Untitled studyField",
			grade: req.body.grade || "Untitled grade",
			activities: req.body.activities || "Untitled activities",
			fromYear: req.body.fromYear || "Untitled fromYear",
			toYears: req.body.toYears || "Untitled toYears",
			description: req.body.description || "Untitled Description"
	});
	eduForm.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while creating the Education Form."
		});
	});

};


exports.findAll = (req, res) => {
	Education.find()
    .then(education => {
        res.send(education);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving forms."
        });
    });

};