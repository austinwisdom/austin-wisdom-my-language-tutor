const fs = require("fs")
const path = require("path")
const FormData = require("form-data")
const axios = require("axios")
require("dotenv").config()
const OpenAI = require('openai')
const { Configuration, OpenAIApi } = OpenAI

const {OPENAI_API_KEY} = process.env

const configuration = new Configuration({
    organization: "org-xkBxqgwQ5n9LAYYrNSisAo54",
    apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const getSpeechToText = () => {
    const filePath = path.join(__dirname, "1687524393362.wav")
    const model = "whisper-1"

    const formData = new FormData()
    formData.append("model", model)
    formData.append("file", fs.createReadStream(filePath))

    axios
        .post("https://api.openai.com/v1/audio/transcriptions", formData, {
            headers: {
                Authorization: `Bearer ${OPENAI_API_KEY}`,
                "Content-Type": `multipart/form-data; boundary=${formData._boundary}`
            }
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(`${err}: Couldn't reach openAI whisper`)
        })
}

getSpeechToText()