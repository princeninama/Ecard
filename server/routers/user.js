import express from 'express'
import { singleUpload } from '../middleware/multer.js'
import { login, signup } from '../controllers/user.js'

const router = express.Router()

router.post("/new",signup)
router.post("/login",login)

export default router


