const Form = require('../models/edit-intro.models.js');

// Create and Save a new Note
exports.create = (req, res) => {
	const form = new Form({
		firstName: req.body.firstName || "Untitled firstName",
		lastName: req.body.lastName || "Untitled lastName",
		headline: req.body.headline || "Untitled headline",
		education: req.body.education || "Untitled education",
		country: req.body.country || "Untitled country",
		state: req.body.state || "Untitled state",
		city: req.body.city || "Untitled city",
		industry: req.body.industry || "Untitled industry",
		phone: req.body.phone || "Untitled Form",
		email: req.body.email || "Untitled Form",
		summery: req.body.summery || "Untitled summery"
	});
	form.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while creating the Form."
		});
	});

};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
	Form.find()
    .then(forms => {
        res.send(forms);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving forms."
        });
    });

};

// Find a single note with a noteId
exports.findOne = (req, res) => {
	Form.findById(req.params.noteId)
    .then(form => {
        if(!form) {
            return res.status(404).send({
                message: "Form not found with id " + req.params.formsId
            });            
        }
        res.send(form);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Form not found with id " + req.params.formsId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving form with id " + req.params.formsId
        });
    });

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
		if(!req.body.content) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }

    User.findByIdAndUpdate(req.params.formsId, {
        formsId: req.body.formsId || "Untitled User",
		firstName: req.body.firstName || "Untitled User",
		lastName: req.body.lastName || "Untitled User",
		headline: req.body.headline || "Untitled headline",
		education: req.body.education || "Untitled education",
		country: req.body.country || "Untitled country",
		state: req.body.state || "Untitled state",
		city: req.body.city || "Untitled city",
		industry: req.body.industry || "Untitled industry",
		phone: req.body.phone || "Untitled Form",
		email: req.body.email || "Untitled Form",
		summery: req.body.summery || "Untitled summery"

    }, {new: true})
    .then( form => {
        if(!form) {
            return res.status(404).send({
                message: "Form not found with id " + req.params.formsId
            });
        }
        res.send(form);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Form not found with id " + req.params.formsId
            });                
        }
        return res.status(500).send({
            message: "Error updating form with id " + req.params.formsId
        });
    });

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
	User.findByIdAndRemove(req.params.formsId)
    .then(form => {
        if(!form) {
            return res.status(404).send({
                message: "Form not found with id " + req.params.formsId
            });
        }
        res.send({message: "Form deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Form not found with id " + req.params.formsId
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.formsId
        });
    });

};