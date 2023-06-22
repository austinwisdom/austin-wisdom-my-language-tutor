const express = require("express");
const router = express.Router();

const studySpaceController = require("../controllers/studySpace-controller")
const studySpeechSynthesisController = require("../controllers/speechSynthesis-controller")

router.route("/").get(studySpaceController.studySpace)
router.route("/").post(studySpeechSynthesisController.getSynthesizedSpeech)

module.exports = router