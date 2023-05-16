import { Router } from "express"
import signRouter from "./signing.routes.js"
import urlRoutes from "./urls.routes.js"
import usersRoute from "./users.routes.js"
import rankingRoute from "./ranking.routes.js"

const routers = Router()

routers.use(signRouter)
routers.use(urlRoutes)
routers.use(usersRoute)
routers.use(rankingRoute)

export default routers