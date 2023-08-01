const express = require("express");
const { addUser, addContent } = require("../../controller/user/userController");


const router = express.Router();


router.post('/user',addUser);
router.post('/content',addContent);


module.exports = router;