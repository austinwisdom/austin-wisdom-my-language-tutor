const express = require("express")
const router = express.Router()

const homePageController = require("../controllers/homePage-controller")

router.route("/").get(homePageController.homePage)

module.exports = router;