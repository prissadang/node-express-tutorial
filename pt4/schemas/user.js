const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	username: String,
	password: String,
	fullname: String,
	dob: Date,
	timestamp: { type: Date, default: Date.now }
});

module.exports = userSchema;