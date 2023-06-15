const homePage = (req, res) => {
    res.status(200).json("Welcome to the homepage")
}

module.exports = {
    homePage
}