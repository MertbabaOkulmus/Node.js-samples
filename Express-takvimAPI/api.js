const express = require('express');
const axios = require('axios');
const { MongoClient, Db, ConnectionClosedEvent } = require("mongodb");
const uri = "mongodb+srv://dbMert:123@cluster0.vgkei.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const ilceler = require('./ilceler.json');
const il = require('./il.json');
const PORT = process.env.PORT || 3000;

const app = express();

var iller = [
        { "1": "ADANA"},
        { "2": "ADIYAMAN"},
        { "3": "AFYONKARAHİSAR"},
        {  "4": "AĞRI"},
        { "5": "AMASYA"},
        { "6": "ANKARA"},
        {"7": "ANTALYA"},
        {"8": "ARTVİN"},
        {"9": "AYDIN"},
        {"10": "BALIKESİR"},
        {"11": "BİLECİKK"},
        {"12": "BİNGÖL"},
        {"13": "BİTLİS"},
        {"14": "BOLU"},
        {"15": "BURDUR"},
        {"16": "BURSA"},
        {"17": "ÇANAKKALE"},
        {"18": "ÇANKIRI"},
        {"19": "ÇORUM"},
        {"20": "DENİZLİ"},
        {"21": "DİYARBAKIR"},
        {"22": "EDİRNE"},
        {"23": "ELAZIĞ"},
        {"24": "ERZİNCAN"},
        {"25": "ERZURUM"},
        {"26": "ESKİŞEHİR"},
        {"27": "GAZİANTEP"},
        {"28": "GİRESUN"},
        {"29": "GÜMÜŞHANE"},
        {"30": "HAKKARİ"},
        {"31": "HATAY"},
        {"32": "ISPARTA"},
        {"33": "MERSİN"},
        {"34": "İSTANBUL"},
        {"35": "İZMİR"},
        {"36": "KARS"},
        {"37": "KASTAMONU"}
]
const ekleme = ()=>{
    MongoClient.connect(
        uri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        function (err, db) {
          if (err) throw err;
          var dbo = db.db("veritabanim"); //hangi database üzderinde işlem yapılacak belirlenir
          dbo.collection("iller")
          .insertMany(il,(err,res)=>{
                if(err) throw err;
                db.close();
          })      
        }
      );
}

var il_adi="";

const select =({req,res,il_adi})=>{
    MongoClient.connect(
        uri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        function(err,db){
            if(err) throw err
            var dbo =db.db("veritabanim")
            if(il_adi===null){
                dbo.collection("iller").find({}).toArray(function (err,result) {
                    if(err) throw err
                    res.send(result);
                    db.close();
                }); 
            }
            else{
                var sorgu=il_adi
                dbo.collection("iller").find({name:"KARS"}).toArray(function (err,result) {
                    if(err) throw err
                    res.send(result);
                    console.log(sorgu);
                    db.close();
                }); 
            }        
        }
    )
}


  app.get("/api/iller",(req,res)=>{
      select(req,res);
  })

  app.get("/api/iller/:il",(req,res)=>{
    var il_adi=req.params.il
    var ilId;
  //  console.log(il_adi);
    MongoClient.connect(
        uri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        function(err,db){
            if(err) throw err
            var dbo =db.db("veritabanim")       
                dbo.collection("iller").find({name:il_adi}).toArray(function (err,result) {
                    if(err) throw err
                    //res.send(result[0].id);
                    ilId=result[0].id
                    //db.close();
                })
               // const id=il_idi.toString(10); 
                dbo.collection("ilceler").find({il_id:toString(ilId)}).toArray(function (errr,resultt) {
                    if(errr) throw errr
                    var ss=parseInt(555);
                    const numara = ss.toString();
                    console.log(numara);
                    console.log("id"+ilId);
                    res.send(resultt);
                    //il_id=result[0].id
                    db.close();
                });    

        }
    )
  })

  app.get("/api/namazvakti/:id",(req,res)=>{
      axios.get("https://www.turktakvim.com/XMLservis.php?tip=vakit&cityID=16741&tarih=2021-07-29&format=json")
          .then((response)=>{
               return res.status(200).json(response.data.cityinfo.vakit);
            })
          .catch((error)=>{
              console.log(error);
          })
  })
 
  app.listen(PORT);