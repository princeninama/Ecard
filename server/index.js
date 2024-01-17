import express from 'express'
import { config } from 'dotenv'
import cookieParser from 'cookie-parser'

config({
    path: './General.env',
})



export const app = express()
app.use(express.json())
app.use(cookieParser())
app.get("/", (req, res) => {
    res.send("Working")
})


import ecard from './routers/cards.js'

app.use('/api/ecard',ecard)
