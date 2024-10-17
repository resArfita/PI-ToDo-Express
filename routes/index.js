const express = require("express")
const route = express.Router()
const todosRoute = require("./todos.route")


route.get("/", (req, res) => {
    res.json({
        message: "Welcome"
    })
})

route.use("/todos", todosRoute)
// route.use("/users")

module.exports = route