const Queue = require('bull');
require("dotenv").config({path:"../.env"});
const sendEmailQueue = new Queue('sendMailQueue', `${process.env.REDIS_URI}`,{
    redis:{
        tls:true,
        enableTLSForSentinelMode:false
    }
});

//console.log(process.env.REDIS_URI);
// console.log(sendEmailQueue);
// sendEmailQueue.on('completed',)
module.exports = sendEmailQueue;
