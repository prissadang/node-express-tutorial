const express = require('express');
const mongoose = require('mongoose');

const db = require('../db.js');

// Schema
const sch_message = require('../schemas/message.js');

// Model
const Message = mongoose.model('messages', sch_message);

const router = express.Router();

router.get('/', (req, res) => {
	Message.find((err, msg) => {
		if (err) {
			res.status(400).send({ error: err });
		} else {
			res.json({ messages: msg });
		}
	});
});

router.get('/:id', (req, res) => {
	Message.findOne({ _id: req.params.id }).exec((err, msg) => {
		if (err) {
			res.status(400).send({ error: err });
		} else {
			res.json({ message: msg });
		}
	});
});

router.post('/', (req, res) => {
	let post = {
		message: req.body.message,
		hidden: req.body.hidden.toLowerCase() == 'true' ? true : false
	}
		
	let newMessage = new Message(post);
	newMessage.save((err, msg) => {
		if (err) {
			res.status(400).send({ error: err });
		} else {
			res.json({ message: msg });
		}
	});
});

router.put('/:id', (req, res) => {
	let post = {
		message: req.body.message,
		hidden: req.body.hidden.toLowerCase() == 'true' ? true : false
	}

	Message.findByIdAndUpdate(req.params.id, { $set: post }, { new: true }, (err, msg) => {
		if (err) {
			res.status(400).send({ error: err });
		} else {
			res.json({ message: msg });
		}
	});
});

router.delete('/:id', (req, res) => {
	Message.remove({ _id: req.params.id }, (err) => {
		if (err) {
			res.status(400).send({ error: err });
		} else {
			res.json({ success: true });
		}
	});
});

module.exports = router;