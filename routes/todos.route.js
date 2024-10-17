const express = require("express")
const { 
    getAllTodo, 
    getTodoById, 
    addTodo, 
    editTodoById, 
    deleteTodoById 
} = require("../controllers/todos.controller")
const route = express.Router()

route.get("/", getAllTodo)
route.get("/:id", getTodoById)
route.post("/", addTodo)
route.put("/:id", editTodoById)
route.delete("/:id", deleteTodoById)

module.exports = route