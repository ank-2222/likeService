const Queue = require("bull");
require("dotenv").config();

const { sendMail } = require("./notificationProcess");

const sendEmailQueue = new Queue("sendMail", {
  redis: {
    host: "127.0.0.1",
    port: 6379,
    password: "root",
  },
});

exports.sendNotification = async (content_id) => {
  const data = {
    contentId: content_id,
  };
  const options = {
    delay: 60000, // 1 min in ms
    attempts: 2,
  };

  try {
    sendEmailQueue.add(data, options).then(() => {
      console.log("Added to queue");
    });
    sendEmailQueue.process(async (job) => {
      return await sendMail(job.data.contentId);
    });
  } catch (error) {
    console.log("Error in sending notification");
  }
};
