const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({path:"./.env"});
const port = process.env.PORT||5050;


const app = express();
require('./processor/index');

//routes
const userRoute = require("./routes/user/user");
const likeRoute = require("./routes/likeService/likeService");


app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api",userRoute);
app.use("/api",likeRoute);


app.use(cors);



app.get("*",(req,res)=>{
    res.status(404).send({message:"Route not found"});
});

app.listen(process.env.PORT,()=>{
    console.log(`server is running at port ${port} `)
})