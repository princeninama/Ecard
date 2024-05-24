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
      const formData = JSON.parse(sessionStorage.getItem('Formdata'));
      setdata(formData);
      console.log('data : ', formData);
    }
  else{
    const value = {
      firstname:'Twinkal',
      secondname:'Tejas',
      location: "Saydi,Torda , Bhiloda, Gujarat",
      maindata: "02/01/2004",
      dates: "01/01/2004",
      eventname: "Mahendi",
      invitedBy:"Mr, Jivabhai",
      hastag:"#TwinTej",
      map_url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.259407846772!2d73.3104949!3d23.8093729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395d850068f0ee4b%3A0x50db475944194ce9!2sSaydi!5e0!3m2!1sen!2sin!4v1716543496127!5m2!1sen!2sin" 
    }
    setdata(value)
  }
  },[])

  
  return (
    <div>
      <Navbar />
      <Home data={data}/>
      <Img />
      <Message data={data}/>
      {/* <GeneralWedding /> */}
    </div>
  );
};

export default Model1;
