const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./pt3/data.db', sqlite3.OPEN_READWRITE, (err) => {
	if (err) {
		console.error(err.message);
	} else {
		console.log('Connected to sqlite database');
	}
});

module.exports = db;

