const express =  require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
	console.log("Successfully Connected To the Database");
}).catch(err => {
	console.log('Could not connect to the database. Exiting now..', err);
	process.exit();
});


app.get('/', (req,res) => {
	res.json({"Message": "This is my Form application"});
});

require('./app/routes/forms.routes.js')(app);

app.listen(3000, () => {
	console.log("Server is Listening on port 3000");
});