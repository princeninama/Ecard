import React, { useState } from "react";
import { postupload } from "../../states/action-creators";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Post = () => {


  const [selectImage,setselectImage] = useState(null);
  const [title,selecttitle] = useState("");
  const notify = (Message) => toast(Message);
  

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    // setSelectedImage(URL.createObjectURL(file));
    setselectImage(file)
  };

  const uploadTemplates = async() =>{
    const data = new FormData();
    data.append("file",selectImage)
    data.append('title',title)
   
    const resp = await postupload(data)
    selecttitle("")
    notify(resp.message)
    console.log('done')
    

  }
  return (
    <div className="min-h-screen bg-slate-300 flex justify-center items-center">
     
      <div className="bg-slate-500 sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-4">
      <ToastContainer/>
        <h1 className="text-white text-center mt-3 font-thin">
          Form For Upload Images Of Client
        </h1>

        <div className="mt-6">
          <h1 className="text-white text-start ml-4 font-thin">
            Enter The Title Of Image:
          </h1>
          <label htmlFor="title" className="block">
            <input
              type="text"
              id="title"
              className="w-full ml-0 sm:w-60 sm:ml-52 bg-white border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e)=>selecttitle(e.target.value)}
              value={title}
            />
          </label>
        </div>

        <div className="mt-6">
          <h1 className="text-white text-start ml-4 font-thin">
            Enter The Image:
          </h1>
          <label htmlFor="image" className="block">
            <input
              type="file"
              id="image"
              className="w-full ml-0 sm:w-60 sm:ml-52  bg-white border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              accept="image/*"
              onChange={(e)=>handleImageChange(e)}
/>
          </label>
        </div>
        <button variant="contained" color="success" style={{margin:'10px 0px 10px 130px'}} onClick={()=>{uploadTemplates()}}>
            Upload
          </button>

            </div>
    </div>
  );
};

export default Post;
