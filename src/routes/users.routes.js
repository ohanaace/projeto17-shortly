import { Router } from "express"

const usersRoute = Router()

usersRoute.get("/users/me")

export default usersRoute