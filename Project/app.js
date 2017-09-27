// require
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var expressSession = require('express-session');

var login = require('./controllers/login');
var home = require('./controllers/home');
var component = require('./controllers/component');
var remove = require('./controllers/remove');


var port = process.env.PORT || 92;

app.locals.init = 0;
// configure
app.set('view engine', 'ejs');

// middleware
app.use(expressSession({secret: 'secret', resave: false, saveUninitialized:true}));
app.use(express.static(path.join(__dirname, "node_modules/bootstrap/dist")));
app.use(express.static(path.join(__dirname, "node_modules/jquery/dist")));

app.use(bodyParser.urlencoded({extended:false}));

app.use(expressValidator());
app.use(function(req, res, next){
 res.locals.session = req.session;
 next();
});
// routes
app.get('/', function(req, res){
	res.redirect('/home');
});

app.use(login);
app.use(home);
app.use(component);
app.use(remove);


// server
app.listen(port, function(){
	console.log('Server started at ' + port + ' port....');
});