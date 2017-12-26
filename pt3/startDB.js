const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./pt3/data.db', sqlite3.OPEN_CREATE | sqlite3.OPEN_READWRITE, (err) => {
	if (err) {
		console.error(err.message);
	} else {
		console.log('Connected to sqlite database');
	}
});

db.serialize(() => {
	db.run('CREATE TABLE messages(id number, message text)')
	.run(`
		INSERT INTO messages(id, message)
		VALUES(1, 'Hi'),
		(2, 'Hello'),
		(3, 'Welcome')
	`)
	.each(`
		SELECT * FROM messages
	`, (err, row) => {
		if (err){
			throw err;
		}
		console.log(row.message);
	});
});

db.close((err) => {
	if (err) {
		return console.error(err.message);
	}
});