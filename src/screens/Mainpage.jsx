import React, { useEffect, useState } from 'react';
import Navbar from '../components/Mainpage/navbar';
import Middlebox from '../components/Mainpage/middlebox';
import Container from '../components/Mainpage/bottom';

const Mainpage = () => {
 return(
  <div>
    <div>
      <Navbar />
    </div>
    <div>
      <Middlebox/>
    </div>
    <div>
      <Container />
    </div>
  </div>
 )
};

export default Mainpage;
