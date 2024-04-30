
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
                <h1>hey   it not showing anything</h1>
            <Navbar/>
               
                        {/* <Route path='/' element={<Combine1/>} />
                        <Route path='/map' element={<Map/>} />
                        <Route path='/album' element={<Album/>} /> */}
            </div>
        </>
    )
}

export default MainPage