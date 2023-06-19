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

    //get help finding out why the obj is here but
    //the properties are undefined
    const prompt = await knex("conversations_en")
        .select()
        .where({"id": topicToSend})
        .then((result) => {
            console.log(result[0].prompt)
            console.log(result[0].prompt.model)
            return result[0].prompt
        })

    const response = await openai.createCompletion(
        { 
        model: "text-davinci-003", 
        prompt: `Pretend you're a barista at a coffee shop, you're helping Me to complete their order. Ask them what they want to drink. Then after they respond, ask if they want anything to eat. Then after they respond, tell them the total price of their order. Then ask them how they would like to pay. Then ask them \"can I get a name for the order?\". Then thank them for ordering and tell them goodbye..\n\nBarista: Hi there, how can I help you today? Me: ${message}`, 
        temperature: 1, 
        max_tokens: 256, 
        top_p: 1, 
        frequency_penalty: 0, 
        presence_penalty: 0, 
        stop: ["Me"], 
    }
    );
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