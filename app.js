var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var serveIndex = require('serve-index');
var path = require('path');
var index = require('./routes/index');
var blog = require('./routes/blog');
var docs = require('./routes/docs'); 
var legal = require('./routes/legal'); 
var contact = require('./routes/contact');
var shop = require('./routes/shop');
var json = require('./routes/json'); 
// var REQUIREDROOT = require('./path/to/routes/ROUTEjs');
var hardfork = require('./routes/hardfork'); 
var app = express();

// view engine setup
app.engine('ejs', require('express-ejs-extend'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// serve assets and images 
app.use('/assets', serveIndex('assets')); // shows you the assets folder file list ...when you get /assets
app.use('/assets', express.static('assets')); // serve the files inside assets ...when you get /assets
app.use('/images', serveIndex('images')); // shows you the images folder file list ...when you get /images
app.use('/images', express.static('images')); // serve the files inside images ...when you get /images
app.use('/public', serveIndex('public')); // shows you the public folder file list ...when you get /public
app.use('/public', express.static('public')); // serve the files inside public ...when you get /public

app.use('/', index); 
// app.use('/json', json); 
app.use('/shop', shop); // add shop route
app.use('/blog', blog); // add blog route
app.use('/doc', docs); // add doc route 
app.use('/docs', docs); // add docs route 
app.use('/user-guides', docs); // add user-guides route 
app.use('/user-guide', docs); // add user-guide route 
app.use('/legal', legal); // add legal route 
app.use('/tos', legal); // add tos route
app.use('/privacy', legal); // add privacy route
// app.use('/routeIwantToVisit', REQUIREDROUTE); // something useful...
app.use('/hardfork', hardfork); // add hardfork route 
app.use('/', contact);

// basically you can use the query operator and the parameters are optional 
// https://stackoverflow.com/questions/41736413/multiple-optional-route-parameters-in-express
// /articles/:year?/:month?/:day?
app.use('/json/:oracle?/:tracker?/:base?/:pairs?', function (req, res, next) {
  console.log("req.params")
  var client_passport = { 
    oracle: req.params.oracle ? req.params.oracle : '',
    tracker:  req.params.tracker ? req.params.tracker : '',
    base:  req.params.base ? req.params.base : '',
    pairs:  req.params.pairs ? req.params.pairs : '',
  };console.log(client_passport)  
  
  req.coin_config = {
    name: 'Electronero',
    symbol: 'ETNX',
    pairs: ['BTC','LTC','ETH','BNB','BSC','USDT'],
    price: 0,
    btc_price: 0,
    eth_price: 0,
    usdt_price: 0,
    ltc_price: 0,
    tracker: req.params.tracker ? req.params.tracker : '',
    from: 'ETNX',
    to: 'USDT',
    base: 'USDT',
  };
  req.coins_config = {
    name: req.params.name ? req.params.name : '',
    symbol: req.params.symbol ? req.params.symbol : '',
    pairs: req.params.pairs ? req.params.pairs : ['BTC','LTC','ETH','BNB','BSC','USDT'],
    price: req.params.price ? req.params.price : '',
    btc_price: req.params.btc_price ? req.params.btc_price : '',
    eth_price: req.params.eth_price ? req.params.eth_price : '',
    usdt_price: req.params.usdt_price ? req.params.usdt_price : '',
    ltc_price: req.params.ltc_price ? req.params.ltc_price : '',
    tracker: req.params.tracker ? req.params.tracker : '',
    from: req.params.from ? req.params.from : '',
    to: req.params.to ? req.params.to : '',
    base: req.params.base ? req.params.base : '',
  };
  next();
}, json);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.render('404', { title: 'Electronero' });
});

module.exports = app;
