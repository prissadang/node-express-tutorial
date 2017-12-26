const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res) => {
	fs.readFile('./pt2/data/messages.json', (err, data) => {
		if(err) 
			throw err;
		obj = JSON.parse(data);
		res.json({ messages: obj });
	});
}); 

module.exports = router;
