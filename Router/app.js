const express = require("express");
const routes = require("./routes/api");
const app = express();
app.use("/api",routes); //yapılandırma yapılır, routers da ki api adreslerine girmeden önüne /api alır.

app.listen(3000);
console.log("server çalışıyor");