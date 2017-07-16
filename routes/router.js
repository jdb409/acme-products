var router = require('express').Router();
var db = require('../db');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', function(req, res){
    var highest = db.highest();
    res.render('index', {highest: highest});
});

router.get('/products', function(req, res){
    var list = db.list();
    res.render('products', {items: list});
});

router.post('/products', function(req, res){
    var item = req.body.item;
    var rating = req.body.rating;
    db.add(item, rating);
    res.redirect('/products');
});

router.get('/product/:item', function(req,res){
    var item = req.params.item;
    var itemObj = db.find(item);
    res.render('product', {product: itemObj});
});

router.use(function (req, res, next) {
  res.status(404).render('error');
})

module.exports = router;

