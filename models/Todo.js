const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    task:String,
    status:Boolean,
    user: {
        type: mongoose.ObjectId,
        ref: "User"
    }
})

const todoModel = mongoose.model("User", todoSchema)

module.exports = Todo