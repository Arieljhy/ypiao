const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./js/routes/user.js');

var app = express();
app.listen(8080);

app.use(express.static('public'));
app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('img'));
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use('/user',userRouter);


