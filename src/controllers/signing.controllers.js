import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { createSignInDB, createSignUpDB } from "../repositories/signing.repositories.js"
import SECRET_KEY from "../constants/secretKey.constant.js"

export async function postSignUp(req, res) {
    const { name, email, password } = req.body
    try {
        const hashPassword = bcrypt.hashSync(password, 10)
        await createSignUpDB({name, email, hashPassword})
        res.status(201).send({ message: "Usuário cadastrado com sucesso" })
    } catch (error) {
        res.status(500).send(error.message)
    }
}
export async function postSignIn(req, res) {
    const { userId, userName } = res.locals
    try {
        const expiresIn = '1w'
        const token = jwt.sign({ userId, userName }, SECRET_KEY, { expiresIn })
        await createSignInDB({token, userId})
        res.send({token: token})
    } catch (error) {
        res.status(500).send(error.message)
    }
}