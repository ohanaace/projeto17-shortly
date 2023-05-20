import { db } from "../database/database.connection.js"

export function findUserDB(email) {
    return db.query(`SELECT * FROM users WHERE email=$1`, [email])
}

export function createSignUpDB({ name, email, hashPassword }) {
    return db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`, [name, email, hashPassword])
}

export function createSignInDB({ token, userId }) {
    return db.query(`UPDATE users SET token=$1 WHERE id=$2`, [token, userId])
}

export function validateTokenDB(token) {
    return db.query(`SELECT * FROM users WHERE token=$1`, [token])
}