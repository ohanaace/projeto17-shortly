import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { db } from "../database/database.connection.js"

export async function postSignUp(req, res) {
    const { name, email, password } = req.body
    try {
        const hashPassword = bcrypt.hashSync(password, 10)
        await db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`, [name, email, hashPassword])
        res.status(201).send({ message: "Usuário cadastrado com sucesso" })
    } catch (error) {
        res.status(500).send(error.message)
    }
}
export async function postSignIn(req, res) {
    const { userId, userName } = res.locals
    try {
        const expiresIn = '1d'
        const secretKey = process.env.SECRET_KEY
        const token = jwt.sign({ userId, userName }, secretKey, { expiresIn })
        await db.query(`UPDATE users SET token=$1 WHERE id=$2`, [token, userId])
        res.send({token: token})
    } catch (error) {
        res.status(500).send(error.message)
    }
}