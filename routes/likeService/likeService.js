const express = require("express");
const { addLikeContent, checkLikedContent, totalLikeCount } = require("../../controller/likeService/likeController");


const router = express.Router();


router.post('/likeContent',addLikeContent);
router.post('/checkLiked',checkLikedContent);
router.post('/totalLike',totalLikeCount);


module.exports = router;