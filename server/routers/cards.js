import express from 'express'
import { SubmitForm } from '../controllers/ecard';

const router = express.Router()

router.post("/form",SubmitForm)




export default router;