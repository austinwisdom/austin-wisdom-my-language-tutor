const OpenAI = require('openai')
const { Configuration, OpenAIApi } = OpenAI
const express = require('express')
const knex = require('knex')(require('../knexfile'))

const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
require("dotenv").config()
const { OPENAI_API_KEY } = process.env

const configuration = new Configuration({
    organization: "org-xkBxqgwQ5n9LAYYrNSisAo54",
    apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


const myTutor = (_req, res) => {
    res.status(200).json("This is my Tutor")
}

const getOpenAIResponse = async (req, res) => {
    const { message } = req.body
    let languageToSend = req.params.language
    let topicToSend = req.params.topic

    const prompt = await knex("prompts")
        .select()
        .where({"id": topicToSend})
        .then((result) => {
            return result[0].prompt
        })

    const response = await openai.createCompletion(
        { 
        model: "text-davinci-003", 
        prompt: `${prompt} Me: ${message}`, 
        temperature: 1, 
        max_tokens: 256, 
        top_p: 1, 
        frequency_penalty: 0, 
        presence_penalty: 0, 
        stop: ["Me"], 
    }
    );
    if (response.data.choices[0].text) {
        const answer = response.data.choices[0].text

        const elimSpeakerName = (text) => {
            let textArr = text.split("")
            let index = textArr.indexOf(":")
            let textToReturn = textArr.splice(index+1)
            return textToReturn
        }
        const AIAnswerToSend = elimSpeakerName(answer)

        res.json({
            message: AIAnswerToSend
        })
    } else {
        res.json("Unable to get AI response")
    }
    
}

const getTopics = async (req, res) => {

    let languageToSend = req.params.language
    const topics = await knex("prompts")
        .select()
        .where({"language": languageToSend})
        .then((result) => {
            return result
        });

    if (topics) {
        res.status(200).json({topics})
    } else {
        res.status(404).json("Topics in that language not found")
    }
}

module.exports = {
    myTutor,
    getOpenAIResponse,
    getTopics
}