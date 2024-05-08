import express from 'express'
import { SaveTemplates, loadtemplates, logOut, login, signup } from '../controllers/user.js'
import { isAuthenticated } from '../middleware/auth.js'
import upload from '../middleware/multer.js'
import { forget } from '../controllers/user.js'
import { getecard } from '../controllers/card.js'
const router = express.Router()

router.post("/new",signup)
router.post("/login",login)
router.get("/forget",forget)
router.post('/post',upload.single('file'),SaveTemplates)
router.get('/logout',isAuthenticated,logOut)
router.get('/templates/:page/:pageSize/:row/:col',loadtemplates)
router.get('/getecard/:id',getecard)
export default router


