import bcrypt from "bcrypt"
import { db } from "../database/database.connection.js"

export async function postSignUp(req, res) {
    const { name, email, password } = req.body
    try {
        const hashPassword = bcrypt.hashSync(password, 10)
        await db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`, [name, email, hashPassword])
        res.status(201).send({message: "Usuário cadastrado com sucesso"})
    } catch (error) {
        res.status(500).send(error.message)
    }
}
export async function postSignIn(req, res) {
    try {

    } catch (error) {
        res.status(500).send(error.message)
    }
}