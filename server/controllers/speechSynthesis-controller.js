const {synthesizeSpeech} = require("../utilities/SpeechSynthesis")

const getSynthesizedSpeech = async (req, res) => {
    const textToSend = req.body.textToSynthesize
    const file = await synthesizeSpeech(textToSend)
    console.log(file)
    res.status(200).json(file)
}

module.exports = {
    getSynthesizedSpeech
}