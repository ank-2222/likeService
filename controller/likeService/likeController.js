const db = require("../../database/db");
const { v4: uuidv4 } = require("uuid");
var moment = require("moment");
const { sendNotification } = require("../../utility/notification");
const sendEmailQueue = require("../../helper/bullConfig");

exports.addLikeContent = async (req, res) => {
  const id = uuidv4();
  const { user_id, content_id } = req.body;

  const CurrentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");

  try {
    let checkContent = `select * from content where id = '${content_id}'`;

    db.query(checkContent, async (err, result) => {
      if (err) throw err;
      else {
        if (result.length == 0) {
          res.status(404).send("Content not found");
        } else {
          let checkUser = `select * from likes where '${content_id}' IN (select id from content where user_id ='${user_id}' ) and liked_by ='${user_id}'`;

          db.query(checkUser, async (err, result) => {
            if (err) throw err;
            else {
              // console.log(result);

              if (result.length > 0) {
                res.status(400).send("User has already liked the content");
                return;
              } else {
                let sql = `INSERT INTO likes ( id,content_id,liked_by,created_at) VALUES ('${id}','${content_id}','${user_id}','${CurrentDateTime}')`;

                db.query(sql, function (err, result) {
                  if (err) throw err;
                  res.status(201).json({ message: "Content Liked" });
                });
              }
            }
          });
        }
      }
    });
  } catch (error) {
    res.status(500).send("Some error occured in addLikeContent");
  }
};

exports.checkLikedContent = async (req, res) => {
  const { user_id, content_id } = req.body;

  try {
    let checkContent = `select * from content where id = '${content_id}'`;

    db.query(checkContent, async (err, result) => {
      if (err) throw err;
      else {
        if (result.length == 0) {
          res.status(404).send("Content not found");
        } else {
          let sql = `select count(*) as totalLike from likes where liked_by ='${user_id}' and content_id='${content_id}'`;

          db.query(sql, function (err, result) {
            if (err) throw err;
            // console.log(result[0].totalLike);
            if (result[0].totalLike > 0)
              res.status(200).json({ message: "Content Liked" });
            else res.status(200).json({ message: "Content has no like" });
          });
        }
      }
    });
  } catch (error) {
    res.status(500).send("Some error occured in checkLikedContent");
  }
};

exports.totalLikeCount = async (req, res) => {
  const { content_id } = req.body;

  try {
    let checkContent = `select * from content where id = '${content_id}'`;

    db.query(checkContent, async (err, result) => {
      if (err) throw err;
      else {
        if (result.length == 0) {
          res.status(404).send("Content not found");
        } else {
          let sql = `select count(liked_by) as totalLike from likes where content_id = '${content_id}'`;

          db.query(sql, function (err, result) {
            if (err) throw err;
            else{


                
            

                const likeCount = result[0].totalLike;
                res.status(200).json({ likeCount });

                if(likeCount===100){
                  let userMail = `select user.email from user where id IN (select user_id from content where id = '${content_id}')`;

                  db.query(userMail,async(err,result)=>{
                    if(err) throw err;
                    else{
                      sendNotification(result[0].email);
    
                    }
                  })
                 
                }
            }
          });
        }
      }
    });
  } catch (error) {
    res.status(500).send("Some error occured in totalLikeCount");
  }
};



