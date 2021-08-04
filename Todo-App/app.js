const {MongoClient} = require("mongodb");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000
const uri = "mongodb+srv://nodemongo:123@cluster0.jkyq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const Gorev = require("./models/Gorev");

app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:false}))

mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err)=>{
        if(err) throw err
        console.log("Mongoose ile başarılı bağlantı");
    }
)

app.post("/",(req,res)=>{
    console.log("Post işlemi yapıldı!");
    const yeniGorev =new Gorev({
        isim: req.body.gorev
    }) 
    yeniGorev.save((err)=>{
        if(err) throw err
        console.log("Veri kaydedildi!");
    })
})

app.get("/",(req,res)=>{
    Gorev.find((err,docs)=>{
        if (err) throw err
        console.log(docs);
        res.render("index",{data:docs})
    })
})

//#region 
/*app.get("/",(req,res)=>{
    MongoClient.connect(
        uri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err,db)=>{
        if(err) throw err
        var dbo = db.db("veritabanim")
        dbo.collection("collectionum").find({}).toArray((err,result)=>{
            if(err) throw err
            console.log(result);
            res.render("index",{data:result});
            db.close();
        })
    })
})*/

/*const ekleme = ({data}) => {
    MongoClient.connect(
        uri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err,db)=>{
            if(err) throw err
            var dbo = db.db("veritabanim")
            dbo.collection("collectionum").insertOne({isim:data},(err,res)=>{
                if (err) throw err;
                console.log("veri kayıt işlemi başarılı");
                console.log(data);
                db.close();
            })
        })
}*/
/*app.post("/",(req,res)=>{
    ekleme({data:req.body.gorev});
    res.redirect("http://localhost:3000"); //post işleminden sonra tekrardan "http://localhost:3000" adresine manuel olarak istek (get isteği) gönderiyoruz ki sayfa güncellensin eklenen veriler gözüksün 
})*/
//#endregion

app.listen(PORT,() => console.log(`Server ${PORT} portunda çalışıyor`))
