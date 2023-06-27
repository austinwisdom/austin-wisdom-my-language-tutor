const express = require('express')
const app = express()

const multer = require("multer")
const getFormData = multer()

const cors = require('cors')
const bodyParser = require('body-parser')
require("dotenv").config()

app.use(getFormData.single())
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('audio'))

const homePageRoutes = require("./routes/homePage.js")
const myProfileRoutes = require("./routes/myProfile")
const myTutorRoutes = require("./routes/myTutor")
const studySpaceRoutes = require("./routes/studySpace")

app.use("/", homePageRoutes)
app.use("/my-profile", myProfileRoutes)
app.use("/my-tutor", myTutorRoutes)
app.use("/study", studySpaceRoutes)

const { PORT } = process.env

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})