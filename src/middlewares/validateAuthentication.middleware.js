import jwt from "jsonwebtoken"
import { validateTokenDB } from "../repositories/signing.repositories.js"
import SECRET_KEY from "../constants/secretKey.constant.js"


export async function validateAuthentication(req, res, next) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")

    if (!token) return res.sendStatus(401)
    const user = await validateTokenDB(token)
    if (!user.rowCount || !jwt.verify(token, SECRET_KEY)) return res.sendStatus(401)

    res.locals.token = token
    next()

}