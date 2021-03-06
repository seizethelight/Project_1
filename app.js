/* 미들웨어 등록 및 에러 처리, 순차적 실행이기 때문에 순서 중요 */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejsLocals = require('ejs-locals');

var routes = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();

// view engine setup
app.engine('ejs', ejsLocals);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //뷰엔진으로 ejs를 사용하니 메소드에서 ejs 생략 가능

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/test', routes);
app.use('/', routes);
app.use(express.static("public"));

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
