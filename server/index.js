import express from 'express'
import { config } from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

config({
    path: './General.env',
})



export const app = express()

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true // Allow credentials
  };
  
app.use(cors(corsOptions));
app.use(express.json())
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("Working")
})


import ecard from './routers/cards.js'
import user from './routers/user.js'

app.use('/api/ecard',ecard)
app.use('/api/user',user)

