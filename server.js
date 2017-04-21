var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var app = express();


console.log('process.env.PORT', process.env.PORT);
var port = process.env.PORT || 3010;


app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

//***********Routes to Handlebars TravisG**********//

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/menu', function(req, res) {
  res.render('menu');
});

app.get('/apps', function(req, res) {
  res.render('apps');
});

app.get('/kitchen', function(req, res) {
  res.render('kitchen');
});

app.get('/sandwich', function(req, res) {
  res.render('sandwich');
});

app.get('/desserts', function(req, res) {
  res.render('desserts');
});

app.get('/coupons', function(req, res) {
  res.render('coupons');
});

app.get('/menu2', function(req, res) {
  res.render('menu2');
});

app.listen(port, function() {
    console.log('connected to port ', port);
});

