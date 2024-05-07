
import {BrowserRouter,Routes,Route, Outlet, useNavigate} from 'react-router-dom'
import Navbar from './navbar'
import Middle1 from './middle1'
import Map from './map'
import Album from './Album'
import { useState,useEffect } from 'react'




export const Model3 = ({data}) =>{

    const name = 'Model3'

   
    return(
        <>
            <div >
                
                <Navbar data={data}/>
                <Outlet data={data}/>
               
                
               
            </div>
        </>
    )
}

export default Model3