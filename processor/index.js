const path = require('path');
const sendEmailQueue = require("../helper/bullConfig");


sendEmailQueue.process(5, path.join(__dirname,'emailQueueProcessor.js'));

// console.log("inside worker");

sendEmailQueue.on('completed',(job)=>{
    console.log(`Completed #${job.id} job`);
})