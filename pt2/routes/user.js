const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res) => {
	fs.readFile('./pt2/data/users.json', (err, data) => {
		if(err) 
			throw err;
		obj = JSON.parse(data);
		res.json({ users: obj });
	});
});

module.exports = router;