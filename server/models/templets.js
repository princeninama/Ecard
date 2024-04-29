import mongoose from "mongoose";

const schema = new mongoose.Schema({
        title:{
            type:String
        },
        Photo:{
            Data:Buffer,
            contentType: String
        }
      
},
{
    timestamps:true
})



export const Templates = mongoose.model("Templates", schema);