import { Ecard } from "../models/Cards_General";

export const SubmitForm=async()=>
    {
        const {formdata} = req.body;
        console.log("reached at backend")

        let Data= await Ecard.create(
            {
                firstname,
                secondname,
                location,
                maindate,
                dates,
                eventname,
                invitedBy,
                photos,
                map_url,
            }
        )
      const res= await Data.save();
      console.log("response saved" ,res);
    }