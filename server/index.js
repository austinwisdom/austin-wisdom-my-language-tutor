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

app.post('/favorite-animal-en', async (req, res) => {
    const { message } = req.body
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Pretend you're an English Teacher talking to your Student about their favorite animal. Be kind and feel free to talk to them about your favorite animal also.\n\nTeacher: What's your favorite animal?\n\nStudent: ",
        temperature: 1.26,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: ["Student:"],
      });
    console.log(response.data)
    
    if (response.data.choices[0].text) {
            res.json({
                message: response.data.choices[0].text
            })
    }
})

// app.post('/favorite-animal-es', async (req, res) => {
//     const { message } = req.body
//     const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: "Pretend you're an Spanish Profesor talking to your Estudiante about their favorite animal. Be kind and feel free to talk to them about your favorite animal also. Only talk in Spanish.\n\nTeacher: What's your favorite animal?\n\nStudent: ",
//         temperature: 1.26,
//         max_tokens: 256,
//         top_p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0,
//         stop: ["Student:"],
//       });
//     console.log(response.data)
//     //here we're passing the openai response to the front end
//     if (response.data.choices[0].text) {
//             res.json({
//                 message: response.data.choices[0].text
//             })
//     }
// })

// //we're using a post request here to the front end so we can pass info to it
// app.post('/', async (req, res) => {
//     const { message } = req.body
//     const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: `Pretend you're a barista at a coffee shop, you're helping Student to complete their order.\n\nBarista: Hi there, how can I help you today?\n\nStudent: ${message}`,
//         temperature: 1,
//         max_tokens: 256,
//         top_p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0,
//         stop: ["Student:"],
//       });
//     console.log(response.data)
//     //here we're passing the openai response to the front end
//     if (response.data.choices[0].text) {
//             res.json({
//                 message: response.data.choices[0].text
//             })
//     }
// })

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})