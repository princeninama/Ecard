import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Img from "./Img";
import Message from "./Message";
import GeneralWedding from "../../components/Form/GeneralWedding";
// import {showform} from "../../components/Mainpage/bottom"
const Model1 = ({data}) => {
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
