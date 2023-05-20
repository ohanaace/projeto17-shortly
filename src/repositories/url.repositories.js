import { db } from "../database/database.connection.js"

export function createShortLinkDB({url, shortUrl, userId}){
    return db.query(`
    INSERT INTO links ("linkUrl", "shortenUrl", "userId")
         VALUES ($1, $2, $3)
         RETURNING id, "shortenUrl";`
        , [url, shortUrl, userId])
}