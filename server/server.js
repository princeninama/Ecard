import Connection from "./connection/connect.js";
import { app } from "./index.js";

Connection()


app.listen(process.env.PORT,()=>{
    console.log(`server is runnin on port ${process.env.PORT}`)
})