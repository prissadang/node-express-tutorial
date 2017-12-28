const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
	message: String,
	timestamp: { type: Date, default: Date.now },
	hidden: Boolean
});

module.exports = messageSchema;