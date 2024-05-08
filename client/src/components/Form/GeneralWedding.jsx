import React, { useState } from "react";
import { FormSubmit } from "../../states/action-creators";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const GeneralWedding = () => {
  const [fileInputs, setFileInputs] = useState([]);
  const dispatch = useDispatch();
  const addFileInput = () => {
    setFileInputs([...fileInputs, { key: fileInputs.length }]);
  };
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    secondname: "",
    location: "",
    maindate: "",
    dates: [],
    eventname: [],
    invitedBy: "",
    photos: [],
    map_url: "",
  });

  const handleFileChange = (e, index) => {
    const files = [...formData.photos];
    files[index] = e.target.files[0];
    setFormData({
      ...formData,
      photos: files,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "eventname") {
      const index = parseInt(e.target.id.replace("eventname", ""));
      const updatedEventNames = [...formData.eventname];
      updatedEventNames[index] = value;
      setFormData({
        ...formData,
        eventname: updatedEventNames,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const placeholders = {
    maindate: "Enter Date",
    firstname: "Enter Bride's Name",
    secondname: "Enter Groom's Name",
    hastag: "Enter #Couple",
    dates: "Enter Date of Events",
    invitedBy: "Enter Family's Names",
    map_url: "Enter Map Location",
    location: "Enter Venue Location",
  };

  const eventNames = ["Haldi", "Mehndi", "Sagai", "Ras Garba", "Wedding"];

  const handleSubmit = async (e) => {
    e.preventDefault();


    sessionStorage.setItem('Formdata',JSON.stringify(formData))
    localStorage.setItem('mode','preview')
    
    console.log("form's data is collected");
    const Modelname = sessionStorage.getItem('modelname')
    navigate(`/preview/${Modelname}` , {state : {Modelname:Modelname}});
  };

  return (
    <div className="container mx-auto p-6 bg-slate-200">
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <h1 className="text-4xl font-serif italic">
          User Need to Insert The Actual Values From Here.
        </h1>
        {Object.entries(placeholders).map(([name, placeholder]) => (
          <div key={name}>
            <label htmlFor={name} className="font-bold border-1">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
            <input
              type={name === "maindate" || name === "dates" ? "date" : "text"}
              name={name}
              id={name}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
              className="input border-2 py-1 px-3 rounded w-full"
            />
          </div>
        ))}

        {eventNames.map((eventName, index) => (
          <div key={index}>
            <label htmlFor={`eventname${index}`} className="font-bold border-1">
              Event Name
            </label>
            <input
              type="text"
              name="eventname"
              id={`eventname${index}`}
              placeholder={eventName}
              onChange={handleChange}
              className="input border-2 py-1 px-3 w-full"
            />
          </div>
        ))}

        <input
          type="file"
          onChange={handleFileChange}
          value={formData.photos}
          name={`file`}
          id={`file`}
        />

        {fileInputs.map((input, index) => (
          <div key={input.key}>
            <input
              type="file"
              name={`file${index}`}
              onChange={handleFileChange}
              id={`file${index}`}
              value={formData.photos}
            />
          </div>
        ))}

        <button
          type="button"
          onClick={addFileInput}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold border-1 py-2 px-4 rounded"
        >
          Add One More Pic
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold border-1 py-2 px-4 rounded"
          onChange={handleSubmit}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default GeneralWedding;
