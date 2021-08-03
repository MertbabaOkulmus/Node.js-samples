const mongoose = require("mongoose");

const Schema = mongoose.Schema //mongoose şemasını şema değişkenine atayıp kullanacağız

const BookSchema = new Schema({
    isim:{
        type:String,
        required:true, //bu alan boş geçilmez
    },
    basilma_tarihi:{
        type:Date,  
        default:Date.now 
    },
    barkod_numarasi:{
        type:String,
        unique:true,//tekil
    }
})

module.exports = mongoose.model('article',BookSchema);