import { Router } from "express"
import { getUserLinks } from "../controllers/users.controllers.js"

const usersRoute = Router()

usersRoute.get("/users/me", getUserLinks)

export default usersRoute