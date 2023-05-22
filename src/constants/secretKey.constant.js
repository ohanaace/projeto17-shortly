import { nanoid } from "nanoid"

const SECRET_KEY = process.env.SECRET_KEY || nanoid(256)

export default SECRET_KEY