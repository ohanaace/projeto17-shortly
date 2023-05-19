import { Router } from "express"
import { postSignIn, postSignUp } from "../controllers/signing.controllers.js"
import validateSchema from "../middlewares/validateSchema.middleware.js"
import { signInSchema, signUpSchema } from "../schemas/signing.schemas.js"
import { validateSignIn, validateSignUp } from "../middlewares/validateSigningRoutes.middleware.js"

const signRouter = Router()

signRouter.post("/signup", validateSchema(signUpSchema), validateSignUp, postSignUp)
signRouter.post("/signin", validateSchema(signInSchema), validateSignIn, postSignIn)

export default signRouter