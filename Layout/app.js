const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine','ejs');

app.use(expressLayouts);

app.get('/',function(req,res){
    res.render('index');
});

app.get('/hakkimda',function(req,res){
    res.render('hakkimda');
});

app.listen(3000);