var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>{
 let visits= req.cookies.visits? parseInt(req.cookies.visits):0;
 visits++;
 res.cookie("visits",visits,{
  httpOnly:true,
  maxAge:99999
 })
 res.locals.visits =visits
  next();
})
//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/about', function(req, res, next) {
  res.render('layout', { title: 'Express' ,partials:{content:'about'}});
});
app.get("/",(req,res)=>{
  const name =req.cookies.name?? "Guest";
  res.send(`
   <h1>Welcome ${name}!</h1>
   <p>you have visited ${res.locals.visits}times</p>
   <a href="/set-name">Set Your Name</a>
 ` )
})
app.get("/set-name",(req,res)=>{
  res.send(`
    <h2>Enter Your Name</h2>
    <form method ="POST" action="/set-name">
    <input type= "text" name="username"/>
    <button type="submit">Save</button>
    </form>
    `)
});

app.post("/set-name",(req,res)=>{
  const username =req.body.username;
  res.cookie("name",username,{
       httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24
  });
  res.redirect("/")
})

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
