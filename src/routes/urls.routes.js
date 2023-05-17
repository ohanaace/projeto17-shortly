import { Router } from "express";
import { deleteURLById, getOpenShortURL, getURLById, postShortenURL } from "../controllers/urls.controllers.js"

const urlRoutes = Router()

urlRoutes.post("/urls/shorten", postShortenURL)
urlRoutes.get("/urls/:id", getURLById)
urlRoutes.get("/urls/open/:shortUrl", getOpenShortURL)
urlRoutes.delete("/urls/:id", deleteURLById)

export default urlRoutes