
import Navbar from './components/1/Navbar'
import Home from './components/1/Home'
import Login from './screens/login'
import Message from './components/1/Message'
import Model1 from './components/model1'
import Img from './components/1/Img'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './screens/Mainpage'
import Create from './screens/create'
import Show from './components/Mainpage/More'
import Signin from './components/login/signin'
import Model2 from './components/Model2'
import Post from './components/Admin/Post'
import Forget from './components/Forget'

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
      <Route path="/" element={<Forget />} />
      <Route path="/main" element={<Mainpage />} />
      <Route path="/Create" element={<Create />} />
      <Route path="/More" element={<Post />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/signin" element={<Signin />} />
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
