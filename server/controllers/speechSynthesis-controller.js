const {synthesizeSpeech} = require("../utilities/SpeechSynthesis")

const getSynthesizedSpeech = (req, res) => {
    const textToSend = req.body.textToSynthesize
    synthesizeSpeech(textToSend)
    res.status(200).json(`This will be synthed: ${textToSend}`)
}

module.exports = {
    getSynthesizedSpeech
}