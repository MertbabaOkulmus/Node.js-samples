const express = require("express");
const bodyParser= require("body-parser");
const {MongoClient, Collection} = require("mongodb");
const app = express();

const uri = "mongodb+srv://nodemongo:123@cluster0.jkyq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
app.use("/assets",express.static("assets"))
app.use(bodyParser.urlencoded({extended:false}))
app.set("view engine","ejs")


app.get("/",(req,res)=>{
    //res.end("Ana Sayfadasınız");
    res.render("index");
})

app.get("/hakkimda",(req,res)=>{
    res.render("hakkimda");
})

var il ="dd";
const sorgu = async ({isim})=>{
    await MongoClient.connect(
        uri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        function(err,db){
            if(err) throw err 
            var dbo =db.db("veritabanim");
            dbo.collection("collectionum").findOne({isim:isim} , function (err,result){
              //  console.log(result);
                il= result.il
                console.log(result.il);
                db.close();
            })
        }
    )
    return il
}
 app.get("/profil/:isim",async (req,res)=> {

    var iller =await sorgu({isim:req.params.isim});
    console.log(iller);
    res.render('profil',{kisi:req.params.isim,il:iller}); // render kullanıdığımız için otomatik olarak views klasörünü altında profil dosyasını bulup yansıtır
})

app.get("/iletisim",(req,res)=>{
    res.sendFile(__dirname+'/views/iletisim.html');
})

app.post("/iletisim",(req,res)=>{
        console.log("iletişim postu çalıştı");
        console.log(req.body.firstname);
        console.log(req.body.mail);
        console.log(req.body.subject);

        res.end();
        
})


app.listen(3000);