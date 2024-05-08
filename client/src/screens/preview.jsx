import React from "react";
import { useSelector } from "react-redux";
import Model1 from "../Models/F1/model1";
import { useLocation } from "react-router-dom";
import { RenderPage } from "../exports/functions";
const Preview = () => {

  const Modelname = useLocation().state.Modelname
  // const data = JSON.parse(sessionStorage.getItem('Formdata'))
  // console.log(data)
  // console.log(Modelname)
  
  const Model = RenderPage({model:Modelname})
  return (
    <div>
      {/* <Model1 /> */}
      <Model />
    </div>
  );
};

export default Preview;
