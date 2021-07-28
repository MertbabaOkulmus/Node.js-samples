const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://nodemongo:123@cluster0.jkyq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

/*MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, db){
        if(err) throw err
        var dbo =db.db("veritabanim");
        dbo.collection("collectionum").deleteOne({isim:"Mehmet"},function (err,result){ //deleteOne sadece tek veri silmek için kullanılır.
             if(err) throw err
             console.log("bir döküman silindi");
             db.close();
        });
    }
)*/

MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err,db){
        if(err) throw err
        var dbo =db.db("veritabanim")
        var sorgu={isim:/^A/}
        dbo.collection("collectionum").deleteMany(sorgu,function(err,result){ //ismi A ile başlayan bütün kayıtları siler
            if(err) throw err
            console.log("şartı sağlayan bütün veriler silindi");
            db.close();
        })
    }
)