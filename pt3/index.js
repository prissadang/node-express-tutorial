const express = require('express');
const bodyParser = require('body-parser');
const db = require('./dbConn.js');

const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/message', (req, res) => {
	db.all('SELECT * FROM messages', [], (err, rows) => {
		if (err) {
			res.json({ success: false, error: err.message });
		} else {
			res.json({ success: true, data: rows });
		}
	});
});

app.get('/message/:id', (req, res) => {
	let id = req.params.id;

	db.get('SELECT * FROM messages WHERE id = ?', [id], (err, row) => {
		if (err) {
			res.json({ success: false, error: err.message });
		} else {
			res.json({ success: true, data: row });
		}
	});
});

app.post('/message', (req, res) => {
	let id = req.body.id,
		message = req.body.message;

	db.run('INSERT INTO messages (id, message) VALUES(?, ?)', [id, message], (err) => {
		if (err) {
			res.json({ success: false, error: err.message });
		} else {
			res.json({ success: true });
		}
	});
})

app.put('/message/:id', (req, res) => {
	let id = req.params.id,
		message = req.body.message;

	db.run('UPDATE messages SET message = ? WHERE id = ?', [message, id], (err) => {
		if (err) {
			res.json({ success: false, error: err.message });
		} else {
			res.json({ success: true });
		}
	});
})

app.delete('/message/:id', (req, res) => {
	let id = req.params.id;

	db.run('DELETE FROM messages WHERE id = ?', [id], (err) => {
		if (err) {
			res.json({ success: false, error: err.message });
		} else {
			res.json({ success: true });
		}
	});
})

const _APP_PORT = 3000;
app.listen(_APP_PORT, () => {
	console.log("start tutorial part 3 on port " + _APP_PORT);
});