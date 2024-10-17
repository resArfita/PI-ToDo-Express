const express = require("express")
const { 
    getAllUsers, 
    getUsersById, 
    addUsers, 
    editUsersById, 
    deleteUsersById 
} = require("../controllers/users.controller")
const route = express.Router()

route.get("/", getAllUsers)
route.get("/:id", getUsersById)
route.post("/", addUsers)
route.put("/:id", editUsersById)
route.delete("/:id", deleteUsersById)

module.exports = route