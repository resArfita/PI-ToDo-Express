require("dotenv").config()
const jwt = require("jsonwebtoken")

module.exports = {
    validateToken: (req, res, next) => {
        const header = req.headers.authorization //tangkap token dari header
        // console.log(header)

        if(!header) {
            res.json("invalid header")
            return
        }

        const token = header.split(" ")[1]

        if(!token) {
            res.json("invalid Token")
            return
        }

        try {
            //checking token
            const payload = jwt.verify(token, process.env.JWT_Key)
            req.payload = payload
            next()
        } catch {
            res.json("invalid token")
            return
        }

    }
}