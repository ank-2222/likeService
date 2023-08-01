const db = require("../../database/db");
const { v4: uuidv4 } = require("uuid");
var moment = require("moment");

exports.addUser = async (req, res) => {
  const id = uuidv4();
  const { name, email, profile_img_url, user_name } = req.body;

  const CurrentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");
  try {
    if (!name || !email || !profile_img_url || !user_name) {
      res.status(400).send("All Input required");
    } else {
      let sql = `select * from user where user_name = '${user_name}'`;
      db.query(sql, (err, result) => {
        if (err) throw err;
        // console.log("res->",result)
        else {
          if (result.length > 0) {
            res.status(400).json({ message: "User Name Already Exist" });
          } else {
            let sql1 = `INSERT INTO user ( id,name,email,profile_img_url,created_at,user_name,updated_at,is_deleted) VALUES ('${id}','${name}','${email}','${profile_img_url}','${CurrentDateTime}','${user_name}','${CurrentDateTime}',${false})`;
            db.query(sql1, function (err, result) {
              if (err) throw err;
              res.status(201).json({ message: "User Added Successfully", id });
            });
          }
        }
      });
    }
  } catch (error) {
    res.status(500).send("some Error occured");
  }
};

exports.addContent = async (req, res) => {
  const id = uuidv4();

  const { caption, img_url, user_id } = req.body;
  const CurrentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");

  try {
    if (!caption || !img_url || !user_id) {
      res.status(400).send("All input required");
    } else {
      let sql = `INSERT INTO content ( id,caption,img_url,user_id,created_at,updated_at,is_deleted) VALUES ('${id}','${caption}','${img_url}','${user_id}','${CurrentDateTime}','${CurrentDateTime}',${false})`;

      db.query(sql, function (err, result) {
        if (err) throw err;
        // console.log(result);
        res.status(201).json({ message: "Content Created", id });
      });
    }
  } catch (error) {
    res.status(500).send("Some error occured in addContent");
  }
};
