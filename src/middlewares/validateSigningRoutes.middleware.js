import { db } from "../database/database.connection.js"

export async function validateSignUp(req, res, next) {
    const { email } = req.body

    const existingEmail = await db.query(`SELECT * FROM users WHERE email=$1`, [email])
    if (existingEmail.rowCount) return res.status(409).send({ message: "E-mail já cadastrado" })
    next()
}

export async function validateSignIn(req, res, next) {
    const { email } = req.body

    const existingEmail = await db.query(`SELECT * FROM users WHERE email=$1`, [email])
    if (!existingEmail.rowCount) return res.status(401).send({ message: "Usuário e/ou senha inválidos" })
    next()
}