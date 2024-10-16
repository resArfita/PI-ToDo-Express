const express = require("express")
const route = express.Router()

route.get("/", (req, res) => {
    res.json({
        message: "Welcome"
    })
})

// route.use("/todos")
// route.use("/users")

module.exports = route