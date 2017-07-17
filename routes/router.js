var router = require('express').Router();
var express = require('express');
var db = require('../db');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.static(__dirname + '/public'));

router.get('/', function(req, res){
    var highest = db.highest();
    res.render('index', {highest: highest});
});

router.get('/products', function(req, res){
    var list = db.list();
    res.render('products', {items: list});
});

router.post('/products', function(req, res, next){
    var item = req.body.item;
    var rating = req.body.rating*1;
    if (!item ||  /\d/.test(item)){
        res.render('error', {field: 'Item names', type: 'letters'});
    }
    else if (!rating || typeof rating !== 'number'){
        res.render('error', {field: 'Ratings', type: 'numbers'});
    }
    else {
        db.add(item, rating);
        res.redirect('/products');
    }
});

router.get('/product/:item', function(req, res){
    var item = req.params.item;
    var itemObj = db.find(item);
    res.render('product', {product: itemObj});
});

router.delete('/product/:item', function(req, res){
    var item = req.params.item;
    db.remove(item.slice(1));
    res.redirect('/products');
});

router.use(function (req, res, next) {
  res.status(404).render('error');
})

module.exports = router;

