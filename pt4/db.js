const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo_dev_demo', {
	useMongoClient: true,
	connectTimeoutMS: 5000
}); // change your mongodb server here! 

mongoose.Promise = Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('connection connected!');
});

module.exports = db;