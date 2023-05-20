import jwt from "jsonwebtoken"
import { nanoid } from "nanoid"

export async function postShortenURL(req, res){
    const token = res.locals.token

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const {userId, userName} = decoded
        res.send(decoded)
    
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function getURLById(req, res){
    try {
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function getOpenShortURL(req, res){
    try {
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function deleteURLById(req, res){
    try {
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}