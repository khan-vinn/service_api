import express from "express"
import dotenv from "dotenv"

dotenv.config()
const app = express()


app.use((req, res, next) => {
    res.status(401).type("txt").send("Not Found")
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Express app listen in port 3000 \nGo to http://localhost:3000")
})