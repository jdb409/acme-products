var express = require('express');
var nunjucks = require('nunjucks');
var router = require('./routes/router.js');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));
app.use(require('method-override')('_method'));
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('view', {noCache: true});

app.use('/', router);

app.listen(port, function(){
    console.log('server running');
});
