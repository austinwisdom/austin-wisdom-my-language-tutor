const synthesizeSpeech = require("../utilities/SpeechSynthesis")

const getSynthesizedSpeech = (req, res) => {
    const textToSend = req.body.textToSynthesize
    console.log(textToSend)
    res.status(200).json(`This will be synthed: ${textToSend}`)
}

module.exports = {
    getSynthesizedSpeech
}