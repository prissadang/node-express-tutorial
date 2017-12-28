const express = require('express');
const mongoose = require('mongoose');
const moment = require('moment');

const db = require('../db.js');

// Schema
const sch_user = require('../schemas/user.js');

// Model
const User = mongoose.model('users', sch_user);

const router = express.Router();

router.get('/', (req, res) => {
	User.find((err, usr) => {
		if (err) {
			res.status(400).send({ error: err });
		} else {
			res.json({ user: usr });
		}
	});
});

router.get('/:id', (req, res) => {
	User.findOne({ _id: req.params.id }).exec((err, usr) => {
		if (err) {
			res.status(400).send({ error: err });
		} else {
			res.json({ user: usr });
		}
	});
});

router.post('/', (req, res) => {
	let post = {
		username: req.body.username,
		password: req.body.password,
		fullname: req.body.fullname,
		// Use moment.js for formatting user defined date to Default Date format
		dob: moment(req.body.dob, 'D/M/YYYY').toDate()
	}
		
	let newUser = new User(post);
	newUser.save((err, usr) => {
		if (err) {
			res.status(400).send({ error: err });
		} else {
			res.json({ user: usr });
		}
	});
});

router.put('/:id', (req, res) => {
	let post = {
		username: req.body.username,
		password: req.body.password,
		fullname: req.body.fullname,
		dob: moment(req.body.dob, 'D/M/YYYY').toDate()
	}

	User.findByIdAndUpdate(req.params.id, { $set: post }, { new: true }, (err, usr) => {
		if (err) {
			res.status(400).send({ error: err });
		} else {
			res.json({ user: usr });
		}
	});
});

router.delete('/:id', (req, res) => {
	User.remove({ _id: req.params.id }, (err) => {
		if (err) {
			res.status(400).send({ error: err });
		} else {
			res.json({ success: true });
		}
	});
});

module.exports = router;