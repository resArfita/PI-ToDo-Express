const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    task:String,
    estimasi:String,
    finish:Boolean,
    user: {
        type: mongoose.ObjectId,
        ref: "User"
    }
})

const TodoModel = mongoose.model("Todo", todoSchema)

module.exports = TodoModel