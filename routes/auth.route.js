const express = require("express")
const { regis, login } = require("../controllers/auth.controller")


const route = express.Router()

// mengirim data
route.post("/regis", regis)
route.post("/login", login)

module.exports = route