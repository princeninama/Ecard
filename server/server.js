import Connection from "./connection/connect.js";
import { app } from "./index.js";
import cors from 'cors'


Connection()

app.use(cors());

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})