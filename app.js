var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.get('/', function(req, res) {
  res.sendFile('index.html', {root: __dirname});
});

app.get('/login', function(req, res) {
  res.sendFile('login.html', {root: __dirname});
});

app.get('/resgister.html', function (req, res) {
  res.sendFile('register.html', { root: __dirname });
});

app.use(bodyParser.urlencoded({extended: false}));
app.post('/doLogin', function(req, res) {
  const name = req.body.usr;
  const pass = req.body.pwsr;

  res.send(`Hello ${name} your pass is ${pass}`);
});

app.listen(5050);