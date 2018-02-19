var express = require("express");
var app = express();
var PouchDB = require('pouchdb');
var port = 3000;
var path = require('path');
var domino = require('domino');
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// global.document = new JSDOM('baseballplayersad.html').window.document;
var bodyParser = require('body-parser');
var window = domino.createWindow('<h1>Hello world</h1>', 'http://example.com');
var document = window.document;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
function submit_button() {
var db = new PouchDB('my_database');
  db.put({
  _id: 'question1',
  answer: their_answer,
});

db.changes().on('change', function() {
  console.log('Ch-Ch-Changes');
});
}
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/baseballplayersad.html'));
});

 
app.listen(port, () => {
 console.log("Server listening on port " + port);
});
app.post("/saveidk", (req, res) => {
	
});
