import mongoose from "mongoose";

const schema = new mongoose.Schema({
        firstname:{
            type:String,
            required:[true],
        },
        secondname:{
            type: String,
        },
        location:{
            type: String,
            required:[true],
        },
        maindate:{
            type:Date,
            required:true
        },
        dates:{
            type:[Date],
            default:[],
        },
        eventname:{
            type:[String],
            default:[],
        },
        invitedBy: {
            type: [String], 
            default: [], 
        },
        photos: {
            type: [String], 
            default: [], 
        },
        map_url:{
            type:String,
            required:true,
        },
      
},
{
    timestamps:true
})



export const Ecard = mongoose.model("Ecard", schema);