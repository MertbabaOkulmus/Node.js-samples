const Joi = require('@hapi/joi');
const express = require('express');
const app = express();

app.use(express.json());

const ogrenciler=[
    {id:1, isim:"Ahmet"},
    {id:2, isim:"Ali"},
    {id:3, isim:"Veli"},
    {id:4, isim:"Ayşe"},
    {id:5, isim:"Fatma"},
];

app.get('/api/ogrenciler',(req,res)=>{
    res.send(ogrenciler);
})

app.put("/api/ogrenciler/:id",(req,res)=>{

    //gelen id ye sahip öğrenci var mı kontrolü
    const ogrenci=ogrenciler.find(ogrenci=>ogrenci.id===parseInt(req.params.id));
    if(!ogrenci) res.status(404).send("Girdiğiniz id ye sahip öğrenci bulunamadı!");

    //validation, veri kontrolü 
    const schema = Joi.object({
        isim_kontrol :Joi.string().min(3).required()
    })

    const result= schema.validate({isim_kontrol:req.body.isim}) //isim_kontrol kontrol ünü hangi veri üzerinde kontrol yapmasını istiyorsak onunla ilişkilendireceğiz, dönen sonucu result a attık
    console.log(result);
    if(result.error){
        res.status(400).send(result.error.details[0].message)
        return
    }

    //update işlemi
    ogrenci.isim = req.body.isim
    res.send(ogrenci);
})

const port = process.env.PORT || 3000
app.listen(port);