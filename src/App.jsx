
import Login from './screens/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './screens/Mainpage'
import Create from './screens/create'
import Home from './components/F1/Middle1';

function App() {

  return (
    // <>
    //   <Navbar/>
    //    <Home/>
    //   <Img/>

    //   <Message/> 
    // </>
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<Mainpage />} />
      <Route path="/Create" element={<Create />} />
      <Route path="/home" element={<Home />} />
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
