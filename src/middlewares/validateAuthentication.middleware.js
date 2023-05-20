import jwt from "jsonwebtoken"
import { validateTokenDB } from "../repositories/signing.repositories.js"

export async function validateAuthentication(req, res, next) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")

    if (!token) return res.sendStatus(401)
    const secretKey = process.env.SECRET_KEY
    const user = await validateTokenDB(token)
    if (!user.rowCount || !jwt.verify(token, secretKey)) return res.sendStatus(401)

    res.locals.token = token
    next()

}