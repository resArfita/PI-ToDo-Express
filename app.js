const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
// const dotenv = require("dotenv")
// const dbConnection = require("./db/conect")

// app.get("/", (req, res) => {
//     res.json({
//         message: "Welcome"
//     })
// })

// dotenv.config()


const allRoute = require("./routes")
const db = require("./db")

db.then(() => {
    console.log("Berhasil Connect ke db")
}).catch((e) => {
    console.log("Gagal Connect db")
    console.log(e)
})

app.use(express.json())
app.use(allRoute)

app.listen(PORT, () => {
    console.log("Server Running in port " + PORT)
})

// dbConnection()