const fs = require("fs")
const path = require("path")
const FormData = require("form-data")
const { Readable } = require('stream')
const multer = require('multer')
const axios = require("axios")

const upload = multer()
require("dotenv").config()

const OpenAI = require('openai')
const { Configuration, OpenAIApi } = OpenAI

const {OPENAI_API_KEY} = process.env

const configuration = new Configuration({
    organization: "org-xkBxqgwQ5n9LAYYrNSisAo54",
    apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const getSpeechToText = async (req, res) => {

    const  bufferToStream  = (buffer) => {
        return  Readable.from(buffer);
      }

    console.log(req.body)
    const fileToSend = req.body.url
    const filePath = path.join(fileToSend)
    const model = "whisper-1"

    const formData = new FormData()
    formData.append("model", model)
    formData.append("file", fs.createReadStream(filePath))

    const getText = () => {
        return new Promise((resolve, reject) => {
            axios
                .post("https://api.openai.com/v1/audio/transcriptions", formData, {
                    headers: {
                        Authorization: `Bearer ${OPENAI_API_KEY}`,
                        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`
                    }
                })
                .then((res) => {
                    console.log(res.data)
                    resolve(res.data)
                })
                .catch((err) => {
                    console.log(`${err}: Couldn't reach openAI whisper`)
                })
        })
    }

    const transcribedText = await getText()

    if (transcribedText) {
        res.status(200).json(`here it is: ${transcribedText}`)
    } else {
        res.json("Couldn't retrieve transcription")
    }
        
}

module.exports = {
    getSpeechToText
}