const express = require("express");
const mongoose = require("mongoose");

const uri ="mongodb+srv://mongoose:123@cluster0.8f7jr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(
    uri,
    {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true},
    (err)=>{
        if(err) throw err
        console.log("veritabanınıa giriş başarılı");
    }
);

const Article = require("./models/Article");

var yeni_makale = new Article({
    isim: "Kitap 1",
    barkod_numarasi:"01A5W"
})

yeni_makale.save((err)=>{
    if(err) throw err
    console.log("Veri başarı ile kaydedildi!"); 
});

