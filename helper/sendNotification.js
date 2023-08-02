require("dotenv").config({path:"../.env"});
const nodemailer = require("nodemailer");

const sendMail=(email)=> {
    console.log("sending notification to ->",email);
    return new Promise((resolve, reject) => {
      let mailOptions = {
        from: 'fromuser@domain.com',
        to: email,
        subject: 'congratulations on 100 Like',
        text: "Your content has got 100 likes.",
      };
      let mailConfig = {
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: process.env.MAIL_SENDER_AUTH,
            pass: process.env.MAIL_SENDER_PASS
        }
      };
      nodemailer.createTransport(mailConfig).sendMail(mailOptions, (err, info) => {
        if (err) {
          reject(`error in mail transporter ->,${err}`);
        } else {
          resolve(info);
        }
      });
    });
  }

module.exports = sendMail;