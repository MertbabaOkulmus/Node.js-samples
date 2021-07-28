const express =require('express');
const app =express();

app.use(express.json())

const ogrenciler=[
    {id:1, isim:"Ahmet"},
    {id:2, isim:"Ali"},
    {id:3, isim:"Veli"},
    {id:4, isim:"Ayşe"},
    {id:5, isim:"Fatma"},
];


app.get("/api/ogrenciler",(req, res)=>{
    res.send(ogrenciler)
})

app.post("/api/ogrenciler",(req, res)=>{
   const ogrenci = {
       id:ogrenciler.length + 1,
       isim:req.body.isim
   };
   ogrenciler.push(ogrenci);
   res.send(ogrenci);
});

const port = process.env.PORT || 3000;
app.listen(port);