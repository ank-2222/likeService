const Queue = require('bull');
const sendEmailQueue = new Queue("sendMail", {
    redis: {
      host: "127.0.0.1",
      port: 6379,
    
    },
  });

  module.exports = sendEmailQueue;