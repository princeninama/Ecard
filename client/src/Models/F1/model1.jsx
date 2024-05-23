import React, { useState,useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Img from "./Img";
import Message from "./Message";
import GeneralWedding from "../../components/Form/GeneralWedding";
// import {showform} from "../../components/Mainpage/bottom"

const Model1 = () => {
  const [data,setdata] =useState({})

  // function myFunction() {
  //  localStorage.setItem('mode','a')
  //   // Add your functionality here
  // }
  // window.addEventListener('popstate', myFunction)
  
  useEffect(()=>{
    const mode = localStorage.getItem('mode')
  console.log(mode)

  if(mode == 'preview')
    {
      setdata(JSON.parse(sessionStorage.getItem('Formdata')))
      
      console.log('data : ',data)
    }
  else{
    const value = {
      firstname:'abc',
      secondname:'bcgd'
    }
    setdata(value)
  }
  },[])
  return (
    <div>
      <Navbar />
      <Home />
      <Img />
      <Message />
      {/* <GeneralWedding /> */}
    </div>
  );
};

export default Model1;
