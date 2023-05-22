import { db } from "../database/database.connection.js"

export function getUserInfoDB({userId}){
    const result = db.query(`
    SELECT users.id AS id, users.name AS NAME,
        SUM(links.views) AS "visitCount",
        json_agg(json_build_object(
            'id', links."id",
            'shortUrl', links."shortenUrl",
            'url', links."linkUrl",
            'visitCount', links."views" 
        )) AS "shortenedUrls"
        FROM users
        LEFT JOIN links ON links."userId"=users.id
        WHERE users.id=$1
        GROUP BY users.id, users.name
        ;`, [userId])
    return result
}