import express from 'express'
import { SaveTemplates, loadtemplates, logOut, login, signup } from '../controllers/user.js'
import { isAuthenticated } from '../middleware/auth.js'
import upload from '../middleware/multer.js'

const router = express.Router()

router.post("/new",signup)
router.post("/login",login)
router.post('/post',upload.single('file'),SaveTemplates)
router.get('/logout',isAuthenticated,logOut)
router.get('/templates/:page/:pageSize/:row/:col',loadtemplates)
export default router


