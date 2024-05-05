import { asyncError } from "../middleware/error.js";
import { Ecard } from "../models/Cards_General.js";


export const getecard = asyncError(async (req, res, next) => {
    const { id } = req.params;

    const data = Ecard.findById(id);
    

    if(!data) {
            return res.status(400).json({message:'Card is not here',success:false})
    }
    return res.status(200).json({success:true,data:data})
});