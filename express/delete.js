const express = require("express");
const app = express();

app.use(express.json());

const ogrenciler = [
  { id: 1, isim: "Ahmet" },
  { id: 2, isim: "Ali" },
  { id: 3, isim: "Veli" },
  { id: 4, isim: "Ayşe" },
  { id: 5, isim: "Fatma" },
];

app.get("/api/ogrenciler", (req, res) => {
  res.send(ogrenciler);
});

app.delete("/api/ogrenciler/:id", (req, res) => {
  const ogrenci=ogrenciler.find(ogrenci=>ogrenci.id===parseInt(req.params.id));
  if (!ogrenci) {
    res.status(400).send(
        `Kayıtlarımızda ${req.params.id} numaraya sahip öğrenci bulunamamaktadır!`
        );
    return;
  }
  
  const index =ogrenciler.indexOf(ogrenci)
  ogrenciler.splice(parseInt(index),1);
  res.send(ogrenci);


});

const port = process.env.PORT || 3000
app.listen(port);