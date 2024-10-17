const express = require("express")
const route = express.Router()

const todosRoute = require("./todos.route")
const usersRoute = require("./users.route")


route.get("/", (req, res) => {
    res.json({
        message: "Welcome"
    })
})

route.use("/todos", todosRoute) //api address
route.use("/users", usersRoute) //api address

module.exports = route