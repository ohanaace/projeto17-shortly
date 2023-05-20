import { Router } from "express";
import { deleteURLById, getOpenShortURL, getURLById, postShortenURL } from "../controllers/urls.controllers.js"
import { validateAuthentication } from "../middlewares/validateAuthentication.middleware.js";

const urlRoutes = Router()

urlRoutes.post("/urls/shorten", validateAuthentication, postShortenURL)
urlRoutes.get("/urls/:id", getURLById)
urlRoutes.get("/urls/open/:shortUrl", getOpenShortURL)
urlRoutes.delete("/urls/:id", validateAuthentication, deleteURLById)

export default urlRoutes