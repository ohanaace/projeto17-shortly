import { Router } from "express"

const signRouter = Router()

signRouter.post("/signup")
signRouter.post("/signin")

export default signRouter