const express = require("express");
const router = express.Router();

const myTutorController = require("../controllers/myTutor-controller")
const speechRecognitionController = require("../speechRecognition-controller")

router.route("/").get(myTutorController.myTutor)
router.route("/:language/:topic").post(myTutorController.getOpenAIResponse)
router.route("/:language").get(myTutorController.getTopics)
router.route("/speech-to-text").post(speechRecognitionController.getSpeechToText)

module.exports = router