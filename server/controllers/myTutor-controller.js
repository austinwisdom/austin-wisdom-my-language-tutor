const myTutor = (req, res) => {
    res.status(200).json("This is my Tutor")
}

const myTutorTest = (req, res) => {
    let languageToSend = req.params.language
    let topicToSend = req.params.topic
    res.status(200).json(`This is a test. Language: ${languageToSend}, Topic: ${topicToSend}`)
}

module.exports = {
    myTutor,
    myTutorTest
}