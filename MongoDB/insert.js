const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://nodemongo:123@cluster0.jkyq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, db) {
    if (err) throw err;
    var dbo = db.db("veritabanim"); //hangi database üzderinde işlem yapılacak belirlenir
    /*dbo.createCollection("collectionum",function (err) { //collection oluşturuldu "collectionum" diye, sql de ki tablo misali
        if(err) throw err
        console.log("Collection oluşturuldu!");
        db.close(); 
    }) */

    var obje = [
    //  {_id:150, isim: "karahanlı", il: "malatya" },
      {_id:"60ffc0c2e1501d2ce434dc4b", isim: "mustafa", il: "giresun" },
    ];

    dbo
      .collection("collectionum")
      .insertMany(obje, function (err,res) {
        if (err) throw err;
        console.log("veri kayıt işlemi başarılı");
        console.log(`${res.insertedCount} adet veri eklendi`);
        db.close();
      });
  }
);
