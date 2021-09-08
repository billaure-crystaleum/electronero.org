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

// Electronero Oracle JSON api
// add authentication to step 1, for next(), else end()
app.use("/json", function(req, res, next){
  console.log("step 1: Authenticate");
  req.coin_config = {};
  const currency_base = {};
  const currency_pairs = [];
  const req_params_from = req.params.from;
  const req_params_to = req.params.to;
  var currency_arr = req_params_to.toString().split(",");
  //var base_currency_arr = req_params_from.toString().split(",");
  currency_pairs.push(currency_arr);
    let base_pairs = ['BTC','LTC','ETH','XSC','ETNX'];
    let requested_base_pairs = [ ];
    let from = req.params.from ? req.params.from : '';
    let to = req.params.to ? req.params.to : '';
    // separate by comma, push into 
    let default_pairs = [ ];
    let requested_pairs = [ ];
    let symbol = req.params.from ? req.params.from : '';  
    for (i=0;i<base_pairs.length;i++){
      let from_to = from.toUpperCase()+"-"+base_pairs[i];
      default_pairs.push(from_to);
    }
    for (j=0;j<requested_base_pairs.length;j++){
      let requested_from_to = from.toUpperCase()+"-"+requested_base_pairs[j].toUpperCase();
      requested_pairs.push(requested_from_to);
    }
  req.coins_config = {
    symbol: symbol ? symbol : '',
    pairs: requested_pairs,
    base: req.params.from ? req.params.from : '',
    from: from ? from : '',
    to: to ? to : '',
    price: 0,
    btc_price: 0,
    eth_price: 0,
    usdt_price: 0,
    ltc_price: 0,
    tracker: req.params.tracker ? req.params.tracker : '',
    oracle: req.params.tracker ? req.params.tracker : '',
  };console.log(req.coins_config)
  const request_profile = req.coins_config;
  var authenticated = true;
    if(authenticated){
      next();
    } else {
      var err = new Error('Authentication Failed');
      err.status = 404;
      next(err);
    }
},json);

  
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
