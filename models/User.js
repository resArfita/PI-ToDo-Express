const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    login:Boolean
})

const UserModel = mongoose.model("User", userSchema)

module.exports = UserModel