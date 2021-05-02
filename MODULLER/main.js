const http = require("http");
const modul=require("./modul");

http.createServer(function(req,res){
   //res.end(modul.anlikTarih());
   res.write("merhaba <strong>dünya</strong>");
   res.end();
}).listen(5050);
