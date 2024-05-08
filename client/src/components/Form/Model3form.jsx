import React, { useState } from "react";
import { FormSubmit } from "../../states/action-creators";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Model3form = ({ Modelname }) => {
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
    eventdates: [],
    eventname: [""], // At least one event input box will be displayed initially
    invitedBy: "",
    preweddigphotos: [],
    map_url: "",
    eventdescription: [],
  });

  const handleFileChange = (e, index) => {
    const files = [...formData.preweddigphotos];
    files[index] = e.target.files[0];
    setFormData({
      ...formData,
      preweddigphotos: files,
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
    }
    else if(name === "eventdate"){
        const index = parseInt(e.target.id.replace("eventdate", ""));
      const updatedEventNames = [...formData.eventdates];
      updatedEventNames[index] = value;
      setFormData({
        ...formData,
        eventdates: updatedEventNames,
      });
    }
    else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const placeholders = {
    firstname: "Enter Bride's Name",
    secondname: "Enter Groom's Name",
    invitedBy: "Enter Family's Names",
    map_url: "Enter Map Location",
    location: "Enter Venue Location",
  };

  const eventNames = ["Haldi", "Mehndi", "Sagai", "Ras Garba", "Wedding"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    sessionStorage.setItem("Formdata", JSON.stringify(formData));
    localStorage.setItem("mode", "preview");
    console.log("form's data is collected");
    console.log(JSON.stringify(formData))
    const Modelname = sessionStorage.getItem("modelname");
    navigate(`/preview/${Modelname}`, { state: { Modelname: Modelname } });
  };

  const addEvent = () => {
    setFormData({
      ...formData,
      eventname: [...formData.eventname, ""],
      eventdates: [...formData.eventdates, ""],
    });
  };

  const removeEvent = () => {
    if (formData.eventname.length > 1) {
      const updatedEventNames = [...formData.eventname];
      const updatedEventDates = [...formData.eventdates];
      updatedEventNames.pop();
      updatedEventDates.pop();
      setFormData({
        ...formData,
        eventname: updatedEventNames,
        eventdates: updatedEventDates,
      });
    }
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

        {formData.eventname.map((eventName, index) => (
          <div key={index}>
            <label htmlFor={`eventname${index}`} className="font-bold border-1">
              Event Name
            </label>
            <input
              type="text"
              name="eventname"
              id={`eventname${index}`}
              placeholder={eventNames[index] || "Event Name"}
              onChange={handleChange}
              className="input border-2 py-1 px-3 w-full"
            />
            <label htmlFor={`eventdate${index}`} className="font-bold border-1">
              Event Date
            </label>
            <input
              type="date"
              name="eventdate"
              id={`eventdate${index}`}
              onChange={handleChange}
              className="input border-2 py-1 px-3 w-full"
            />
          </div>
        ))}

       <div className=" justify-center items-center flex">
       <button
          type="button"
          onClick={addEvent}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold border-1 py-2 px-4 rounded mx-2"
        >
          Add Event
        </button>

        <button
          type="button"
          onClick={removeEvent}
          className="bg-red-500 hover:bg-red-700 text-white font-bold border-1 py-2 px-4 rounded mx-2"
        >
          Remove Last Event
        </button>
       </div>

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

export default Model3form;
