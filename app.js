const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

const allRoute = require("./routes")

app.use(express.json())
app.use(allRoute)

app.listen(PORT, () => {
    console.log("Server Running in port" + PORT)
})