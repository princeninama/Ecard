import { useState } from "react"
import { useSelector } from "react-redux"
import MainPage from "../Models/F3/mainpage"
import { Route,Routes, useNavigate } from "react-router-dom"



const Model = () =>{
    const [modelname,setmodelname] = useState('')
    const title = useSelector((state)=>state.user.title)
    const navigator = useNavigate()
    return(
        <div>
            {title}
          


        </div>
    )
}

export default Model