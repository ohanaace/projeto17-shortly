import { db } from "../database/database.connection.js"

export function getRankingDB() {
    return db.query(`
SELECT users.id AS id, users.name AS NAME,
    COUNT(links.id) AS "linksCount",
    COALESCE(SUM(links.views), 0) AS "visitCount"
FROM users
    LEFT JOIN links on links."userId" = users.id
    GROUP BY users.id, users.name
    ORDER BY "visitCount" DESC
    LIMIT 10;
    `)
}