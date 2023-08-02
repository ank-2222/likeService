const Queue = require('bull');
require("dotenv").config({path:"../.env"});

const sendEmailQueue = new Queue('sendMailQueue', `${process.env.REDIS_URI}`);

module.exports = sendEmailQueue;
