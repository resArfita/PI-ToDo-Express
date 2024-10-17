const express = require("express")
const route = express.Router()

const todosRoute = require("./todos.route")
const authRoute = require("./auth.route")
const { validateToken } = require("../middleware/auth")

route.use((req, res, next) => {
    console.log("Middleware untuk semua route")
    next()
})

route.get("/", (req, res) => {
    res.json({
        message: "Welcome"
    })
})

route.use("/auth", authRoute)
route.use("/todos", validateToken, todosRoute) //api address
//for accessing todosRoute, the middleware validateToken gonna be run first. we can't continue if it's not validate


module.exports = route