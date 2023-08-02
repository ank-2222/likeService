require("dotenv").config();
const nodemailer = require("nodemailer");

const sendMail=(email)=> {
    console.log(email);
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
            user: 'nathanial.fadel@ethereal.email',
            pass: 'J8jtJcCgVhWDWAfzRR'
        }
      };
      nodemailer.createTransport(mailConfig).sendMail(mailOptions, (err, info) => {
        if (err) {
          reject(err);
        } else {
          resolve(info);
        }
      });
    });
  }

module.exports = sendMail;