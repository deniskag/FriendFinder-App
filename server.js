var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('app'));

require('./app/routing/apiRouter.js')(app); 
require('./app/routing/htmlRouter.js')(app);


app.listen(process.env.PORT || 8080);