const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send('Hello');
});

app.get('/start',(req,res)=>{
    res.send('başlamaya hazır mısın!');
})

app.get('/dogum/:yil/:gun',(req,res)=>{
    //res.send(req.params.yil)
    res.send(req.params);
})

app.get('/dogum/:yil/:gun',(req,res)=>{
    res.send(req.query); //http://localhost:3000/dogum/1999/6?sortBy=56  query="sortBy=56 " 
})

const port =process.env.PORT || 3000;

app.listen(port)

console.log(`Sunucu ${port} portunda çalışıyor!`)