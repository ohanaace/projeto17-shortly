import { Router } from "express"
import { getRanking } from "../controllers/ranking.controllers.js"

const rankingRoute = Router()

rankingRoute.get("/ranking", getRanking)

export default rankingRoute