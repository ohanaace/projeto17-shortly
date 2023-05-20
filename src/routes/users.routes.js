import { Router } from "express"
import { getUserLinks } from "../controllers/users.controllers.js"
import { validateAuthentication } from "../middlewares/validateAuthentication.middleware.js"

const usersRoute = Router()

usersRoute.get("/users/me", validateAuthentication, getUserLinks)

export default usersRoute