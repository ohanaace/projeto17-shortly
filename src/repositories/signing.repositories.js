import { db } from "../database/database.connection.js"

export function findUserDB(email){
    const result = db.query(`SELECT * FROM users WHERE email=$1`, [email])
    return result
}

export function createSignUpDB({name, email, hashPassword}){
   const result = db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`, [name, email, hashPassword])
   return result
}

export function createSignInDB({token, userId}){
    const result = db.query(`UPDATE users SET token=$1 WHERE id=$2`, [token, userId])
    return result
}