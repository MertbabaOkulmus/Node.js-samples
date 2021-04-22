const http = require("http");
const modul=require("./modul");

http.createServer(function(req,res){
    res.end(modul.anlikTarih());
}).listen(5050);
