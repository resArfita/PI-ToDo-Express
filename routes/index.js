const express = require("express")
const route = express.Router()

const todosRoute = require("./todos.route")
const authRoute = require("./auth.route")


route.get("/", (req, res) => {
    res.json({
        message: "Welcome"
    })
})

route.use("/auth", authRoute)
route.use("/todos", todosRoute) //api address

module.exports = route