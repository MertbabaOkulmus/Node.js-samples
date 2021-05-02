const http =require("http");
const url=require("url");

/*var ornek_adres="http://localhost:5050/?isim=Mert&soyisim=Okulmus";
var parcala=url.parse(ornek_adres,true);
console.log(parcala.host);
console.log(parcala.pathname);
console.log(parcala.search);
const qdata=parcala.query;
console.log(qdata.isim);
console.log(qdata.soyisim);*/

http.createServer((req,res)=>{
    var q=url.parse(req.url,true);
    res.write(q.pathname);
    res.end();
}).listen(6060)
