import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{
    Bride_name: "Sakshi",
    Groom_name: "Aryan",
    location: "Veer Narmad South Gujarat University, Surat, Gujarat 395007",
    Wedding_Date: "01/06/2024",
    map_url: "https://maps.app.goo.gl/VVQ9uPdBuGKGhTY8A",
    invitedBy: ["mohalbhai yadav","raniben yadav","aadityanad yadv","rukmani yadv","rajmukji dalal","kinjalben dalal"],
    events: [{name:"Haldi",date:"01/06/2024",description:"the auspicious mahurat (timing) for applying turmeric paste to the bride and groom"},
        {name:"Ras/Garba",date:"02/06/2024",description:"ras/garba with kinjal dave, start at time 8pm"},
        {name:"wedding",date:"03/06/2024",description:"wedding at veer anrmad University, at 7pm come with blessings"}
    ]
    }

}

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Add your reducer functions here
        saveuser : (state,action) =>{
            // console.log('here');
            // console.log(action.payload)
            state.user = action.payload;
            // console.log(state.user)
        }
    }
})

export const { saveuser} = userReducer.actions;
export default userReducer.reducer