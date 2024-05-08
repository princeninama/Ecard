import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Model3 from "../Models/F3/mainpage"
import { fetchEcardData } from "../states/action-creators"



const Card = () =>{

    const [Data,setData] = useState()
    const [model,setmodel] = useState()
    
    const { id } = useParams()
    useEffect(()=>{
        const fetchdata = async() =>{
          const data = await fetchEcardData(id);
          setData(Data)
        }
        fetchdata()
    })

    return(
        <div>
            
        </div>
    )
}

export default Card