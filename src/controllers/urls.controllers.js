import jwt from "jsonwebtoken"
import { nanoid } from "nanoid"
import { createShortLinkDB, deleteUrlByIdDB, getURLBYIdDB, getUrlOwnerDB, openShortUrlDB } from "../repositories/url.repositories.js"
import SECRET_KEY from "../constants/secretKey.constant.js"

export async function postShortenURL(req, res) {
    const { url } = req.body
    const token = res.locals.token

    try {
        const decoded = jwt.verify(token, SECRET_KEY)
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
    const { shortUrl } = req.params

    try {
        const result = await openShortUrlDB(shortUrl)
        if (!result.rowCount) return res.status(404).send({ message: "URL não encontrada" })
        const { linkUrl } = result.rows[0]
        res.redirect(linkUrl)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function deleteURLById(req, res) {
    const { id } = req.params
    const token = res.locals.token

    try {
        const result = await getUrlOwnerDB(id)
        if (!result.rowCount) return res.status(404).send({ message: "URL não encontrada" })
        console.log(result.rows[0])
        const decoded = jwt.verify(token, SECRET_KEY)
        const { userId } = decoded
        if (userId !== result.rows[0].userId) return res.status(401).send({ message: "Operação não autorizada" })
        await deleteUrlByIdDB(id)
        res.sendStatus(204)
    } catch (error) {
        res.status(500).send(error.message)
    }
}