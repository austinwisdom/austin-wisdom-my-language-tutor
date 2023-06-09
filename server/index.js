const express = require("express")
const app = express()
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("Welcome to the API!")
})

app.listen(8080, () => {
    console.log("server is listening on 8080")
})