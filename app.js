var express = require('express');
var bodyParser = require("body-parser");
var indexPage = require('./view/indexPage.js');
var concreteModule = require('./modules/concreteModule.js');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.send(indexPage.getPage(req.query));
});
app.get('/search', function (req, res) {
  //  req.body = { customer_name: "cu" }
  res.send(indexPage.getPage(req.query));
  });
app.post('/', function (req, res) {
   console.log(req.body);
  res.send(indexPage.getPage(req.body));
});
app.listen(3000, function () {
  console.log('concreteCalculator is listening on port 3000!');
});