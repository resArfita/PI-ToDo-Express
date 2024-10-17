const express = require("express")
const { 
    getAllTodo, 
    getTodoById, 
    addTodo, 
    editTodoById, 
    deleteTodoById,
    deleteAllTodo,
    getTodoForTheTaskOnly
} = require("../controllers/todos.controller")
const route = express.Router()

route.get("/allDetail", getAllTodo)
route.get("/:id", getTodoById)
route.post("/", addTodo)
route.put("/:id", editTodoById)
route.delete("/:id", deleteTodoById)
route.delete("/", deleteAllTodo)
route.get("/", getTodoForTheTaskOnly)

module.exports = route