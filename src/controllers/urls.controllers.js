import jwt from "jsonwebtoken"
import { nanoid } from "nanoid"
import { createShortLinkDB } from "../repositories/url.repositories.js"

export async function postShortenURL(req, res){
    const {url} = req.body
    const token = res.locals.token

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const {userId, userName} = decoded
        const shortUrl = nanoid()
        const link = await createShortLinkDB({url, shortUrl, userId})
        const {id, shortenUrl} = link.rows[0]
        res.status(201).send({id, shortUrl: shortenUrl})
    
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