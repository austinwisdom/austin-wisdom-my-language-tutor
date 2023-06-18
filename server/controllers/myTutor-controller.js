const OpenAI = require('openai')
const { Configuration, OpenAIApi } = OpenAI
const express = require('express')
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

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Pretend you're a barista at a coffee shop, you're helping Me to complete their order. Here are your objectives for the conversation:\n1. Find out what they want to drink, and what size they want.\n2. Find out what they want to eat.\n3. Ask if there's anything else you can get for them today.\n4. Tell them the total price for their order (like $5.87 for example).\n5. Thank them for their order, tell them to have a great day.\n\nAfter these objectives have been completed, the conversation is marked as concluded.\n\nBegin conversation below:\nBarista: Hi there, what can I get started for you today?\n\nMe: ${message}`,
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: ["Me"],
      });
    if (response.data.choices[0].text) {
        res.json({
            message: response.data.choices[0].text
        })
    } else {
        res.json("Unable to get AI response")
    }

    
}

module.exports = {
    myTutor,
    getOpenAIResponse
}