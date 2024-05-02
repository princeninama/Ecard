import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import {MainPage} from "../Models/F3/mainpage"
import { Outlet, Route,Routes, useNavigate } from "react-router-dom"



const Model = () =>{
    const [modelname,setmodelname] = useState('')
    const title = useSelector((state)=>state.user.title)
    const navigator = useNavigate()
    useEffect(()=>{
       if(title == undefined)
       {
        navigator('/main')
       }
       else{
        navigator(`${title}`)
       }
    })
    return(
        <div>
          
            <Outlet/>

        </div>
    )
}

export default Model