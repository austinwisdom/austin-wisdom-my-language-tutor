const express = require('express')
const app = express()

const OpenAI = require('openai')
const { Configuration, OpenAIApi } = OpenAI

const cors = require('cors')
const bodyParser = require('body-parser')
require("dotenv").config()

app.use(bodyParser.json())
app.use(cors())

const homePageRoutes = require("./routes/homePage.js")
const myProfileRoutes = require("./routes/myProfile")
const myTutorRoutes = require("./routes/myTutor")
const studySpaceRoutes = require("./routes/studySpace")

app.use("/", homePageRoutes)
app.use("/my-profile", myProfileRoutes)
app.use("/my-tutor", myTutorRoutes)
app.use("/study-space", studySpaceRoutes)


const { OPENAI_API_KEY, PORT } = process.env

const configuration = new Configuration({
    organization: "org-xkBxqgwQ5n9LAYYrNSisAo54",
    apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})