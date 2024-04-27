
import Navbar from './Models/F1/Navbar'
import Home from './Models/F1/Home'
import Login from './screens/login'
import Message from './Models/F1/Message'
import Model1 from './Models/F1/model1'
import Img from './Models/F1/Img'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './screens/Mainpage'
import Create from './screens/create'
import Show from './components/Mainpage/More'
import Signin from './components/login/signin'
import Model2 from './Models/F2/Model2'

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
      <Route path="/" element={<Model1 />} />
      <Route path="/main" element={<Mainpage />} />
      <Route path="/Create" element={<Create />} />
      <Route path="/More" element={<Show />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/signin" element={<Signin />} />
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
