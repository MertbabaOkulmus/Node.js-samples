const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://nodemongo:123@cluster0.jkyq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(
    uri,
    {useNewUrlParser:true,useUnifiedTopology:true},
    function (err,db){
        if (err) throw err
        var dbo =db.db("veritabanim")
        var yeniDeger={$set:{il:"küçükyalı",isim:"muharrem"}};
        dbo.collection("collectionum").updateOne({isim:"betül"},yeniDeger,function(err,result){//kayıtlarda adı betül olan ilk kayıta sadece güncelleme yapar
            if (err) throw err
            console.log("başarılı")
            db.close();
        });
    }
)

MongoClient.connect(
    uri,
    {useNewUrlParser:true,useUnifiedTopology:true},
    function (err,db){
        if (err) throw err
        var dbo =db.db("veritabanim")
        var yeniDeger={$set:{il:"küçükyalı",isim:"muharrem"}};
        dbo.collection("collectionum").updateMany({isim:"betül"},yeniDeger,function(err,result){//kayıtlarda adı betül olan bütün kayıtlara güncelleme yapar
            if (err) throw err
            console.log("başarılı")
            db.close();
        });
    }
)