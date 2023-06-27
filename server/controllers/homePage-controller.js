const homePage = (_req, res) => {
    res.status(200).json("Welcome to the homepage")
}

const serveAudioFile = (req, res) => {
    res.status(200)
}

module.exports = {
    homePage,
    serveAudioFile
}