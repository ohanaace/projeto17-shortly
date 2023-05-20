import jwt from "jsonwebtoken"
import { db } from "../database/database.connection.js"

export async function validateAuthentication(req, res, next){
    const {authorization} = req.headers
    const token = authorization?.replace("Bearer ", "")

    if(!token) return res.sendStatus(401)
    const secretKey = process.env.SECRET_KEY
    const user = await db.query(`SELECT * FROM users WHERE token=$1`, [token])
    if(!user.rowCount || !jwt.verify(token, secretKey)) return res.sendStatus(401)

    next()

}