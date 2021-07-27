const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://nodemongo:123@cluster0.jkyq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, db) {
    if (err) throw err;
    var dbo = db.db("veritabanim"); //hangi database üzderinde işlem yapılacak belirlenir
    dbo.collection("collectionum").findOne({},function(err,result){ //findeOne sadece ilk veriyi getirir
        if(err) throw err;
        console.log(result);//verinin tüm bilgileri
        console.log(result.isim)// veri içerisinde isim alanı içerisnde ki veri
        db.close();
    })
    
  }
);

MongoClient.connect(
    uri,
    {useNewUrlParser:true, useUnifiedTopology:true},
    function (err,db){
        if(err) throw err;
        var dbo = db.db("veritabanim");
        dbo.collection("collectionum").find({}).toArray(function(err,result){
            if(err) throw err
            console.log(result);
            db.close();
        })
    }
)

MongoClient.connect(
    uri,
    {useNewUrlParser:true, useUnifiedTopology:true},
    function (err,db){
        if(err) throw err;
        var dbo = db.db("veritabanim");
        dbo.collection("collectionum").find({},{projection:{isim:1}}).toArray(function(err,res){ //sadece isim sutunun daki verileri gösterir 1 true yu temsil eder, gösterilmesini istemediğim sutunları yazıp 0(false) yazarsak da o sutunlar gösterilmez, //ilk {}parantezler where kıstası için kullanılır fakat şimdi bir kısıtlama yapmadık
            if(err) throw err;
            console.log(res);
            db.close();
        })
    }
)
