import { db } from "../database/database.connection.js"

export function createShortLinkDB({url, shortUrl, userId}){
    return db.query(`
    INSERT INTO links ("linkUrl", "shortenUrl", "userId")
         VALUES ($1, $2, $3)
         RETURNING id, "shortenUrl";`
        , [url, shortUrl, userId])
}

export function getURLBYIdDB(id){
    return db.query(`SELECT id AS "urlId", "linkUrl", "shortenUrl" FROM links WHERE id=$1`, [id])
}