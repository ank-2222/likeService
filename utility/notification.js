require("dotenv").config();

const sendEmailQueue = require("../helper/redisConfig");

exports.sendNotification = async (content_id) => {
  const data = {
    contentId: content_id,
  };
  const options = {
    delay: 60000, // 1 min in ms
    attempts: 2,
  };

  try {

   sendEmailQueue.add(data, options).then(()=>{
    console.log("Added to queue");
   })
  } catch (error) {
    console.log("Error in sending notification");
  }
};
