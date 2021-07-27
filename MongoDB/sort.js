const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://nodemongo:123@cluster0.jkyq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err,db){
        if (err) throw err
        var dbo =db.db("veritabanim");
        dbo.collection("collectionum").find().sort({isim:-1}).toArray(function(err,result){ // isim sutununa göre alfabetik sıralama yapar 1 ifadesi a dan z ye, -1 ifadesi z den a ya demektir
            if(err) throw err
            console.log(result);
            db.close();
        })
    }
)