const express = require('express');
const bodyParser = require('body-parser');

const message = require('./routes/message.js');
const user = require('./routes/user.js');

const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/message', message);
app.use('/user', user);

const _APP_PORT = 3000;
app.listen(_APP_PORT, () => {
	console.log("start tutorial part 2 on port " + _APP_PORT);
});