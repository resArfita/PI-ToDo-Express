const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    login:Boolean
})

const userModel = mongoose.model("User", userSchema)

module.exports = User