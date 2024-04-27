import mongoose from "mongoose"
import { config } from "dotenv";
config({
    path: './General.env',
})
// const URL= process.env.MONGO_URI;
const URL='mongodb://localhost:27017/ekankotri'
// console.log(process.env.PORT)
                                                                                                

const Connection = () =>{
    try {
        const {connection} = mongoose.connect(URL,{useUnifiedTopology:true})
        console.log(`database connected ${connection}`)
        
    } catch (error) {
        console.log('error : ',error)  
    }
}

export default Connection