const myProfile = (_req, res) => {
    res.status(200).json("This is my profile")
}

module.exports = {
    myProfile
}