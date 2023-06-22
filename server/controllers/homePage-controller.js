const homePage = (req, res) => {
    res.status(200).json("Welcome to the homepage")
}

const serveAudioFile = (req, res) => {
    console.log(req.params.audioFile)
    res.status(200)
}

module.exports = {
    homePage,
    serveAudioFile
}