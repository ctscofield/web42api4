require("dotenv").config()
const express = require("express")
const server = express()
console.log(process.env.HOSTNAME);

if (process.env.NODE_ENV === "production") {
    console.log("this means this code is deployed!")
}

const PORT = process.env.PORT || 5000

console.log("port is > ", PORT)

server.get("/api", (req, res) => {
    res.json({ message: `${process.env.COHORT} Rocks`})
})

server.use((req, res) => {
    res.status(404).json({message: "not found"})
})

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})