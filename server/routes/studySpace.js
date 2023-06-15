const express = require("express");
const router = express.Router();

const studySpaceController = require("../controllers/studySpace-controller")

router.route("/").get(studySpaceController.studySpace)

module.exports = router