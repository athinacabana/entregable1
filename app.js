const express = require("express")
const app = express()
const path = require("path")


app.listen(3030, () => console.log("servidor corriendo en 3030"))

app.use(express.static(path.join(__dirname, 'public')))
