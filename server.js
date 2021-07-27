import express from "express"
import dotenv from "dotenv"
import expressUtils from './utils/app.js'
import expressRoutes from "./app/routes/index.js"

dotenv.config()

const app = express()
expressUtils(app)
expressRoutes(app)


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Express app listen in port ${port}
Go to http://localhost:3000 || http://127.0.0.1:3000/ \n \n`)
})