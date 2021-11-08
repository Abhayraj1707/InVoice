let nodeMailer=require('nodemailer');

const sendMail=(mailTo)=>{
    var transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user : `#################`,
            pass : `#################`
        }
    });
    
    let settingMail = {
        from : `#################`,
        to : mailTo,
        subject : 'Invoice Mail',
        text : `Dummy Mail`
    };
    
    transporter.sendMail(settingMail,(error,info)=>{
        if(error) {
            console.log("something went wrong :" , error);
        }else {
            console.log("email sent ", info);
        }
    })
}

module.exports = sendMail

// for using this function:

// https://myaccount.google.com/lesssecureapps // visit this link and access permission for enabling mail services

// const sendMail = require("./sendMail");   // importing function

// sendMail(mail);  // calling function where ever required
