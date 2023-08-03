
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

    const res = sendEmailQueue.add(data,options).then(()=>{
      console.log("added to queue");
    });
    // console.log(res);
  } catch (error) {
    console.log("Error in sending notification");
  }
};
