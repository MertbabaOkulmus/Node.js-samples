var nodemailer=require("nodemailer")

var transfer=nodemailer.createTransport({
    service:"gmail", //gönderici mail in kullandığı servis
    auth:{//gönderici mail in bilgileri
        user:"mertbaba.okulmus.010@gmail.com",
        pass:"HarryPotter21"
    }
})

var mailBilgi={
    from:"mertbaba.okulmus.010@gmail.com",
    to:"mertbaba.okulmus@hotmail.com,matamatik-kimya@hotmail.com",//bir den fazla kişiye mail göndermek için mailller arasına , koymak yeterlidir 
    subject:"NodeJs ile Mail",
    text:"NodeJs ile Mail gönderiyorum",
    html:"<h1>HTML ile Mail</h1><strong>Mailde html bilgisi gönderiyorum.</strong>" //mail içeriğine html tağları da yazabiliyoruz, text özelliği gibi kullana biliyoruz
};

transfer.sendMail(mailBilgi,function (error) {
    if(error) console.log(error)
    else console.log("Mailiniz gönderildi!!")
})