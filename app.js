var express = require('express');
var nunjucks = require('nunjucks');
var router = require('./routes/router.js');

var app = express();

app.use(express.static('public'));
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('view', {noCache: true});

app.use('/', router);

app.listen(3000, function(){
    console.log('server running');
});