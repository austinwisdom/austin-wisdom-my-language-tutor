const express = require("express");
const router = express.Router();

const myProfileController = require("../controllers/myProfile-controller")

router.route("/").get(myProfileController.myProfile)

module.exports = router