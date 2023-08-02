const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const port = process.env.PORT ;
const moment = require("moment");
//handle uncaught err
process.on("uncaughtException", function (err) {
  console.log(`uncaughterror-> ${err}`);
});

const app = express();
require("./processor/index");

//routes
const userRoute = require("./routes/user/user");
const likeRoute = require("./routes/likeService/likeService");

app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRoute);
app.use("/api", likeRoute);

app.get("/", (req, res) => {
  const CurrentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");
  res
    .status(200)
    .json({
      HTTPCode:"200",
      Status: "OK",
      message: "Welcome to Home",
      EntryTime: CurrentDateTime,
    });
});
app.get("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use(cors);
app.listen(process.env.PORT, () => {
  console.log(`server is running at port ${port} `);
});
