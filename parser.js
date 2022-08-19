

require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const nightmare = require('nightmare')();

const args = process.argv.slice(2);
const url = args[0];
const minPrice = args[1];
   
try{
    checkPrice();
    async function checkPrice(){
      const priceString = await nightmare
        .goto(url)
        .wait(".a-offscreen")
        .evaluate(() => document.getElementsByClassName("a-offscreen").innerText)
        .end()
    
     
        if(priceString < minPrice){
            sendEmail('Price is low ', `The price on ${url} has dropped below ${minPrice}`)
            console.log(`It's cheaper than ${minPrice}`);
    
        }
      
    
    }
   
}
catch(err){
    console.log(`Error ${err}`)
}

function sendEmail(subject , body){
    const email = {
        to : 'liwiri9205@yubua.com',
        from : '// Enter Your Mail-id',
        subject: subject,
        text : body,
        html : body ,


    }
    return sgMail.send(email);
}