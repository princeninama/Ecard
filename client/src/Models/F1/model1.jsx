import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Img from './Img'
import Message from './Message'
import GeneralWedding from '../../components/Form/GeneralWedding'
// import {showform} from "../../components/Mainpage/bottom"
const Model1 = () => {
  const showform=true;
  return (
    <div>
      <Navbar/>
      <Home/>
      <Img/>
      <Message/>
      {
        ( showform && (<GeneralWedding/>))
      }
    </div>
  )
}

export default Model1
