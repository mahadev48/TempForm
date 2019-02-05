 
const Patent = require('./patent.models.js');

exports.create = (req, res) => {
	const patentForm = new Patent({
			patentTitle: req.body.patentTitle || "Untitled patentTitle",
			patentOffice: req.body.patentOffice || "Untitled patentOffice",
			applicationNumber: req.body.applicationNumber || "Untitled applicationNumber",
			inventorName: req.body.inventorName || "Untitled inventorName",
			fillingDate: req.body.fillingDate || "Untitled fillingDate",
			patentUrl: req.body.patentUrl || "Untitled patentUrl",
			description: req.body.description || "Untitled description"
	});
	patentForm.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while creating the Patent Form."
		});
	});

};


exports.findAll = (req, res) => {
	Patent.find()
    .then(patent => {
        res.send(patent);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving forms."
        });
    });
};