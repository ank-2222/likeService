const path = require('path');
const sendEmailQueue = require("../helper/bullConfig");


sendEmailQueue.process( path.join(__dirname,'emailQueueProcessor.js'));

sendEmailQueue.on('completed',(job)=>{
    console.log(`Completed #${job.id} job`);
})