const {MongoClient} = require("mongodb");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000

var yapilacaklar=[]

app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.render("index",{data:yapilacaklar});
})

app.post("/",(req,res)=>{
    yapilacaklar.push(req.body.gorev);
    res.render("index",{data:yapilacaklar});

})

app.listen(PORT,() => console.log(`Server ${PORT} portunda çalışıyor`))
