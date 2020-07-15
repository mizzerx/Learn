var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.get('/', function(req, res) {
  res.sendFile('index.html', {root: __dirname});
});

app.get('/login', function(req, res) {
  res.sendFile('login.html', {root: __dirname});
});

app.get('/register', function (req, res) {
  res.sendFile('register.html', { root: __dirname });
});

app.use(bodyParser.urlencoded({extended: false}));
app.post('/doLogin', function(req, res) {
  const name = req.body.usr;
  const pass = req.body.pwsr;

  res.send(`Hello ${name} your pass is ${pass}`);
});

app.post('/doRegister', function (req, res) {
  const name = req.body.usr;
  const pass = req.body.pwsr;

  res.send(`Hello ${name} your pass is ${pass}`);
});

app.get('/note', function(req, res) {
  res.sendFile('note.html', {root: __dirname});
});

app.post('/takeNote', function(req, res) {
  const note = req.body.note;
  const writeNote = Date() + "\n" + note;
  fs.appendFile('note.txt', writeNote, function(err, data) {
    if (err) res.send('Write fail');
    else res.send('Wite success');
  })
});

app.get('/readNote', function(req, res) {
  fs.readFile('note.txt', function(err, data) {
    if (err) res.send('Read note error');
    else res.send(`${data}`);
  })
})

app.listen(5050);