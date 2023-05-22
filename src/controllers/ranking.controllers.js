import { getRankingDB } from "../repositories/ranking.repositories.js"

export async function getRanking(req, res){
    try {
        const ranking = await getRankingDB()
        res.send(ranking.rows)
    } catch (error) {
        res.status(500).send(error.message)
    }
}