const Queue = require('bull');

const sendEmailQueue = new Queue('sendMailQueue', 'redis://127.0.0.1:6379');

module.exports = sendEmailQueue;
