var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var multer = require ('multer');
var flash = require('express-flash');
const Auth = require("./middleware/auth");
var bodyParser = require("body-parser");
// const userAuth = require("./middleware/userAuth");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sampledataRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var authRouter = require('./middleware/auth');
// var userAuthRouter = require('./middleware/userAuth');
var profileRouter = require('./routes/profile');
var thankyouRouter = require('./routes/thankyou');
var pageNotFoundRouter = require('./routes/pageNotFound');
var registerformRouter = require('./routes/registerform');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret : 'absoluego',
  cookie : {maxAge : 60000},
  saveUninitialized : false,
  resave : false
}));

app.use(flash());


app.use('/', indexRouter);
app.use('/users', Auth,usersRouter);
app.use('/register', sampledataRouter);
app.use('/login', loginRouter);
app.use('/auth', authRouter);
app.use('/thankyou', thankyouRouter);
// app.use('/userAuth', userAuthRouter);
app.use('/profile',profileRouter);
app.use('/registerform',registerformRouter);
app.use('/pageNotFound',pageNotFoundRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
