import { Router } from "express"
import { postSignIn, postSignUp } from "../controllers/signing.controllers.js"

const signRouter = Router()

signRouter.post("/signup", postSignUp)
signRouter.post("/signin", postSignIn)

export default signRouter