const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/*
- sample get usage
	- usage: 'localhost:3000/sample'
	- return(json): { message: 'hello world' }
*/
app.get('/sample', (req, res) => { // same as: function(req, res) { }
	res.json({ message: 'hello world' });
}
});

/*
- url with parameters
	- usage: 'localhost:3000/sample/[number]/[text]'
	- return(json): { request: [some parameters on url] }
*/
app.get('/sample/:id/:text', (req, res) => {
	res.json({ request: req.params });
});

/*
- post
	- usage: 'localhost:3000/sample'
	- return(json): { request: [some parameters on post body] }
*/
app.post('/sample', (req, res) => {
	res.json({ request: req.body });
});

/*
- start api 
- _APP_PORT is port for application 
  and return message when application is running
*/
const _APP_PORT = 3000;
app.listen(_APP_PORT, () => {
	console.log("start tutorial part 1 on port " + _APP_PORT);
});