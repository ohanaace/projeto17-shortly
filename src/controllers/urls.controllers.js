import jwt from "jsonwebtoken"
import { nanoid } from "nanoid"
import { createShortLinkDB, getURLBYIdDB, openShortUrlDB } from "../repositories/url.repositories.js"

export async function postShortenURL(req, res) {
    const { url } = req.body
    const token = res.locals.token

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const { userId } = decoded
        const shortUrl = nanoid()
        const link = await createShortLinkDB({ url, shortUrl, userId })
        const { id, shortenUrl } = link.rows[0]
        res.status(201).send({ id, shortUrl: shortenUrl })

    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function getURLById(req, res) {
    const { id } = req.params

    try {
        const link = await getURLBYIdDB(id)
        if (!link.rowCount) return res.status(404).send({ message: "URL não encontrada" })
        const { urlId, shortenUrl, linkUrl } = link.rows[0]
        res.send({ id: urlId, shortUrl: shortenUrl, url: linkUrl })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function getOpenShortURL(req, res) {
    const {shortUrl} = req.params

    try {
        const result = await openShortUrlDB(shortUrl)
        if(!result.rowCount) return res.status(404).send({message: "URL não encontrada"})
        const {linkUrl} = result.rows[0]
        res.redirect(linkUrl)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function deleteURLById(req, res) {
    try {

    } catch (error) {
        res.status(500).send(error.message)
    }
}