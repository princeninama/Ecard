
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './navbar'
import Middle1 from './middle1'
import Map from './map'
import Album from './Album'


const Combine1 = () =>{
    return(
        <>
           
            <Middle1/>
        </>
    )
} 

const MainPage = () =>{

    

    return(
        <>
            <div>
            <Navbar/>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Combine1/>} />
                        <Route path='/map' element={<Map/>} />
                        <Route path='/album' element={<Album/>} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default MainPage