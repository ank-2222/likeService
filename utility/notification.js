const { options } = require("nodemon/lib/config");
const sendEmailQueue = require("../helper/bullConfig");

exports.sendNotification = async (content_id) => {
  const data = {
    contentId: content_id,
  };
  const options ={
    delay: 5000, // 1 min in ms
    attempts: 2
  }

  try {
    // console.log(data);

    sendEmailQueue.add(data,options).then(()=>{
      console.log("added to queue");
    });
  } catch (error) {
    console.log("Error in sending notification");
  }
};
