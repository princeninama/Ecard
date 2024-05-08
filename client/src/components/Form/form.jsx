// import Model3 from "./mainpage"
import '../../css/mainpage.css'
import { useEffect, useRef, useState } from "react"
import GeneralWedding from "../../components/Form/GeneralWedding"



const Form3 = ({Model,Modelname,Formname}) => {

    const [selected,setselected] = useState(false)
    sessionStorage.setItem('modelname',Modelname)
    
    return (
        <div className="scrollbar">
            <div className="w-screen h-screen overflow-y-scroll " id="scroll">
                <Model />
            </div>
            
            <div className=" justify-center flex items-center my-4" >
                {
                    selected ? <Formname /> : <button onClick={()=>{setselected(true);}} className="relative overflow-hidden bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-md">
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600"></span>
                    <span className="absolute inset-0 transform scale-0 bg-white rounded-lg" />
                    <span className="relative z-10">Select</span>
                </button> 
                }
              
            </div>
            
        </div>
    )
}

export default Form3