const fs=require("fs");
const http=require("http");


http.createServer((req,res)=>{
   /* fs.readFile("ornek.html",(error,data)=>{//okuma
        res.writeHead(200,{"Content-Type":"text/html"})//karşıdan gelecek dosyanın hangi türde okunacağı belirlenir
        res.write(data);
        res.end();
    });*/
   /* fs.appendFile("ornek.txt","java",(err)=>{//dosya içeriklerine ekleme yapar, dosya ismi,eklenecek bilgi,varsa error çıktısı
        if(err) throw err;
        console.log("Kaydedildi!");
    })*/

    fs.rename("ornek.txt","değiştirildi.txt",(err)=>{
        if(err) throw err;
        console.log("Değişiklik başarılı!");
    });
    

    res.end();
}).listen(6060);