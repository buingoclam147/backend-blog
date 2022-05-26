var cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
// require to use database 
const mongoose = require('./db/mongoose')

app.use(cookieParser());

// require to use body 
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

var cors = require('cors')

app.use(express.static('./upload'))

const multer = require('multer');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://website-blog-five.vercel.app');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(
  cors({
    origin: ['http://backend-nodejs-blog.herokuapp.com/api/', 'https://backend-nodejs-blog.herokuapp.com/api/'],
    credentials: true,
  })
)
// declare all models 
const {
  Category,
  User,
  Blog,
  Auth
} = require('./models')
//declare route
const categoryRouter = require('./routes/category.route');
const userRouter = require('./routes/user.route');
const blogRouter = require('./routes/blog.route');
const authRouter = require('./routes/auth.route');
// create API 
app.use('/api/category', categoryRouter);
app.use('/api/user', userRouter);
app.use('/api/blog', blogRouter);
app.use('/api/auth', authRouter);



app.listen(port, () => {
  console.log('running port: ' + port);
})