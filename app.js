const { json } = require('express');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(json));


app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));


const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

const bcryptjs = require('bcryptjs');

const session = require('express-session');
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized:true
}));



app.use('/', require('./router'));

app.listen(5000, ()=>{
    console.log('server corriendo en http:http://localhost:5000');
});