const express =  require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

/*File Upload*/
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const router = express.Router();

const DIR = './uploads';

let storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, DIR);
	},
	filename: (req, file, cb) => {
		cb(null, file.filename + '_' + Date.now() + '.' + path.extname(file.originalname));
	}
});
let upload = multer({storage: storage});
/* ./File Upload*/

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(cors())



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

/*File Upload*/

app.get('/api', function(req, res){
	res.end('file catcher example');
});
app.post('/api/upload',upload.single('photo'), function (req, res) {
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });
    
      } else {
        console.log('file received');
        return res.send({
          success: true
        })
      }
});
/* ./File Upload*/

app.get('/', (req,res) => {
	res.json({"Message": "This is my Form application"});
});

require('./app/routes/forms.routes.js')(app);
require('./app/experience/experience.routes.js')(app);
require('./app/education/education.routes.js')(app);
require('./app/licenses/licenses.routes.js')(app);
require('./app/volunteer/volunteer.routes.js')(app);
require('./app/skills/skills.routes.js')(app);
require('./app/publication/publication.routes.js')(app);
require('./app/patent/patent.routes.js')(app);
require('./app/course/course.routes.js')(app);
require('./app/project/project.routes.js')(app);
require('./app/honors/honors.routes.js')(app);
require('./app/score/score.routes.js')(app);
require('./app/language/language.routes.js')(app);
require('./app/organization/organization.routes.js')(app);

app.listen(3000, () => {
	console.log("Server is Listening on port 3000");
});