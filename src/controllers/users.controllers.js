import jwt from "jsonwebtoken"
import SECRET_KEY from "../constants/secretKey.constant.js"
import { getUserInfoDB } from "../repositories/users.repositories.js"


export async function getUserLinks(req, res){
    const token = res.locals.token
    try {
        const decoded = jwt.verify(token, SECRET_KEY)
        const {userId} = decoded
        const result = await getUserInfoDB({userId})
        res.send(result.rows[0])

    } catch (error) {
        res.status(500).send(error.message)
    }
}