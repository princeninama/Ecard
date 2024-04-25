import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './screens/login'
import Message from './components/Message'

import Img from './components/img'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './screens/Mainpage'
import Create from './screens/create'
import Show from './components/Mainpage/More'

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
      <Route path="/More" element={<Show />} />
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
