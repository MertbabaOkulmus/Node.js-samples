const express = require('express');
const { ReadPreference, MongoClient } = require('mongodb');

const uri = "mongodb+srv://nodemongo:123@cluster0.jkyq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const app=express();


app.get("/ogrenciler/:id",(req,res)=>{
    MongoClient.connect(
        uri,
        {useNewUrlParser:true,useUnifiedTopology:true},
        function(err,db){
            if(err) throw err
            var dbo = db.db("veritabanim");
            var sorgu={ isim: `${req.params.id}`}; // İsmi A ile başlayanlar
            dbo.collection("collectionum").find(sorgu).toArray(function (err,ress) {
                if (err) throw err
                res.send(ress);
                console.log(ress);
                console.log(req.params.id);
                db.close();
            })
    })
})

app.listen(3000)