import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import routers from "./routes/index.routes.js"
dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())
app.use(routers)

app.listen(process.env.PORT, () => console.log(`Rodando na ${process.env.PORT}`))