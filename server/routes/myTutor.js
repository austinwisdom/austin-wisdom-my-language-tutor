const express = require("express");
const router = express.Router();

const myTutorController = require("../controllers/myTutor-controller")

router.route("/").get(myTutorController.myTutor)
router.route("/:language/:topic").post(myTutorController.getOpenAIResponse)

module.exports = router