const path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();
var session = require('express-session');

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended : true}));

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.listen(3001, () => {
    console.log('Server is running at port 3001');
});

app.get('/',(req, res) => {
   res.render("home");
});

app.post('/login',(req, res) => {
    console.log(req.body);
    res.render("home");
});

app.post('/register',(req, res) => {
    res.render("home");
});