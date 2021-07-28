const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://nodemongo:123@cluster0.jkyq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

/*MongoClient.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true},function(err,db){
    if(err) throw err
    var dbo = db.db("veritabanim");
    dbo.collection("collectionum").find({il:"kars", isim:"Ahmet"}).toArray(function (err,res){//ilk {}parantezler where kıstası için kullanılır
        if (err) throw err
        console.log(res)
        db.close();
    })
})*/

MongoClient.connect(
    uri,
    {useNewUrlParser:true,useUnifiedTopology:true},
    function(err,db){
        if(err) throw err
        var dbo = db.db("veritabanim");
        var sorgu={ isim: /^m/ }; // İsmi A ile başlayanlar
        dbo.collection("collectionum").find(sorgu).toArray(function (err,res) {
            if (err) throw err
            console.log(res);
            db.close();
        })
})

