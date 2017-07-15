var router = require('express').Router();
var db = require('../db');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', function(req, res){
    res.render('index');
});

router.get('/products', function(req, res){
    var list = db.list();
    console.log(list);
    res.render('products', {items: list});
});

router.post('/products', function(req, res){
    var item = req.body.item;
    var rating = req.body.rating;
    db.add(item,rating);
    console.log(db.list());
    res.redirect('/products');
});

module.exports = router;