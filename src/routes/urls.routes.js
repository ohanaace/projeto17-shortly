import { Router } from "express";
import { deleteURLById, getOpenShortURL, getURLById, postShortenURL } from "../controllers/urls.controllers.js"
import { validateAuthentication } from "../middlewares/validateAuthentication.middleware.js"
import validateSchema from "../middlewares/validateSchema.middleware.js"
import urlSchema from "../schemas/url.schemas.js"

const urlRoutes = Router()

urlRoutes.post("/urls/shorten", validateSchema(urlSchema), validateAuthentication, postShortenURL)
urlRoutes.get("/urls/:id", getURLById)
urlRoutes.get("/urls/open/:shortUrl", getOpenShortURL)
urlRoutes.delete("/urls/:id", validateAuthentication, deleteURLById)

export default urlRoutes