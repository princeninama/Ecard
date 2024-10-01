import express from 'express'
import SubmitForm  from '../controllers/ecard.js';
import { GetWeddingdata, Saveusedata } from '../controllers/card.js';

const router = express.Router()

router.post("/form",SubmitForm)
router.post("/Saveuserdata",Saveusedata)
router.get('/GetWeddingdata/:id',GetWeddingdata);




export default router;