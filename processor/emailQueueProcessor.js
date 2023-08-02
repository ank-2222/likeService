const sendMail = require("../helper/sendNotification");

const emailQueueProcessor = async (job,done)=>{
  // console.log("inside processor");
  // console.log(job);
  try {
    // console.log("in email processor");
    const {contentId}= job.data;
    await sendMail(contentId);
    done();
  } catch (error) {
    console.log(error);
    throw error;

  }
}




  module.exports = emailQueueProcessor;