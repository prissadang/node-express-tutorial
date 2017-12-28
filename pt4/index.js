const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const route = {};
route.message = require('./routes/message.js');
route.user = require('./routes/user.js');

const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/message', route.message);
app.use('/user', route.user);

const _APP_PORT = 3000;
app.listen(_APP_PORT, () => {
	console.log('start tutorial part 4 on port ' + _APP_PORT);
});