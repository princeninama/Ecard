import { useSelector } from "react-redux"
import Navbar from "./Navbar"
import Middle from "./middle"



const Model4 = () =>{

    const data = useSelector((state)=>state.users.data)
    console.log(data)
    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <Middle data={data}/>
            </div>
        </div>
    )
}


export default Model4