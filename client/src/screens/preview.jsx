import React from "react";
import { useSelector } from "react-redux";
import Model1 from "../Models/F1/model1";
import { useLocation } from "react-router-dom";
import { RenderPage } from "../exports/functions";
const Preview = () => {

  // const Modelname = useLocation().state.Modelname
  const Modelname = sessionStorage.getItem('modelname')
  // const data = JSON.parse(sessionStorage.getItem('Formdata'))
  // console.log(data)
  // console.log(Modelname)
  
  const Model = RenderPage({model:Modelname})
  return (
    <div>
      {/* <Model1 /> */}
      <Model />
      <div className="justify-center flex items-center my-4">
      <button  className="relative overflow-hidden  bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-md">
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600"></span>
                    <span className="absolute inset-0 transform scale-0 bg-white rounded-lg" />
                    <span className="relative z-10 flex">Next &#8594;</span>
                </button> 
      </div>
     
    </div>
  );
};

export default Preview;
