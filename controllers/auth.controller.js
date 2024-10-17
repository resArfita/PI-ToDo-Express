require("dotenv").config()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const UserModel = require("../models/User")

module.exports = {
    regis: async (req, res) => {
        const data = req.body
        // console.log(data)

        //hashing password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(data.password, salt)
        data.password = hash

        const newUser = new UserModel(data)
        newUser.save()

        res.json({
            message: "Regis Success!"
        })
    },

    login: async (req, res) => {
        const data = req.body

        //check user
        const validateUser = await UserModel.findOne({username: data.username}).exec()
        if(!validateUser) res.json({
            message: "Login Failed"
        })

        // console.log(data)
        // console.log(validateUser)

        const validatePassword = bcrypt.compareSync(data.password, validateUser.password)
        if(!validatePassword) {
            res.json({
                message: "gagal login"
            })
            return
        }

        //generate token
        const token = jwt.sign(
            { username: validateUser.username }, //payload (don't put credential data (such as passw) here)
            process.env.JWT_Key  //signature (secret key). this also credential data restricted
        ) 

        res.json({
            message: "Login Seccess, lanjuuut!",
            token
        })
        return
    }
}