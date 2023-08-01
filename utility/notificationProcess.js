require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "paula.murray@ethereal.email",
      pass: "ABqb1n53qMT6jE2xbV",
    },
  });
const sendMail=(email)=> {
    console.log(email);
    return new Promise((resolve, reject) => {
      let mailOptions = {
        from: 'fromuser@domain.com',
        to: email,
        subject: 'Bull - npm',
        text: "This email is from bull job scheduler tutorial.",
      };
      let mailConfig = {
        service: 'gmail',
        auth: {
          user: 'fromuser@domain.com',
          pass: 'mail_password_here'
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