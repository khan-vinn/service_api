import express from "express"
import dotenv from "dotenv"
import expressUtils from './utils/app.js'
import expressRoutes from "./app/routes/index.js"
import mongoose from "mongoose"

dotenv.config()
const app = express()
mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then((message) => console.log(`connected with ${message.toString()}`))
    .catch(err => console.log(err))

expressUtils(app)
expressRoutes(app)


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Express app listen on port ${port}
Go to http://localhost:${port}/ || http://127.0.0.1:${port}/ \n \n`)
})