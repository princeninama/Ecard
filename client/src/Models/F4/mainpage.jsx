import { useSelector } from "react-redux"
import Navbar from "./Navbar"
import Middle from "./middle"



const Model4 = () =>{

    const data = useSelector((state)=>state.users.data)
    console.log(data)
    const picdata  = useSelector((state)=>state.picdata.picsdata)
    console.log(picdata)
    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <Middle data={data} picdata={picdata}/>
            </div>
        </div>
    )
}


export default Model4