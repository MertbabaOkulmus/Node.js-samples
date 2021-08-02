const {MongoClient} = require("mongodb");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000
const uri = "mongodb+srv://nodemongo:123@cluster0.jkyq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    MongoClient.connect(
        uri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err,db)=>{
        if(err) throw err
        var dbo = db.db("veritabanim")
        dbo.collection("collectionum").find({}).toArray((err,result)=>{
            if(err) throw err
            console.log(result);
            db.close();
        })
    })
    res.render("index");
})

const ekleme = ({data}) => {
    MongoClient.connect(
        uri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err,db)=>{
            if(err) throw err
            var dbo = db.db("veritabanim")
            dbo.collection("collectionum").insertOne({todoApp:data},(err,res)=>{
                if (err) throw err;
                console.log("veri kayıt işlemi başarılı");
                console.log(data);
                db.close();
            })
        })
}
app.post("/",(req,res)=>{
    ekleme({data:req.body.gorev});
    res.render("index");

})

app.listen(PORT,() => console.log(`Server ${PORT} portunda çalışıyor`))
