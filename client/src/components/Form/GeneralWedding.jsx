import React, { useState } from "react";

const GeneralWedding = () => {
  const [fileInputs, setFileInputs] = useState([]);

  const addFileInput = () => {
    setFileInputs([...fileInputs, { key: fileInputs.length }]);
  };

  return (
    <div className="container mx-auto p-6 bg-slate-200">
      <form className="grid gap-4">
        <h1 className="text-4xl font-serif italic">
            User Need to Insert The Actual Values From Here.
        </h1>
        <label htmlFor="Date" className="font-bold border-1">
          Date
        </label>
        <input type="date" name="" id="" placeholder="date" className="input border-2 py-1 px-3 " />

        <label htmlFor="Name" className="font-bold border-1">
          Bride's Name
        </label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Twinkal"
          className="input border-2 py-1 px-3 "
        />

        <label htmlFor="Name" className="font-bold border-1">
          Groom's Name
        </label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Tejas"
          className="input border-2 py-1 px-3 "
        />

        <label htmlFor="Name" className="font-bold border-1">
          #Couple
        </label>
        <input
          type="text"
          name=""
          id=""
          placeholder="#Twintej"
          className="input border-2 py-1 px-3 "
        />

        <label htmlFor="date" className="font-bold border-1">
          Date of Events
        </label>
        <input
          type="date"
          name=""
          id=""
          placeholder="1 may 2024"
          className="input border-2 py-1 px-3 "
        />

        <label htmlFor="date" className="font-bold border-1">
          Date of Events
        </label>
        <input
          type="date"
          name=""
          id=""
          placeholder="2 may 2024"
          className="input border-2 py-1 px-3 "
        />

        <label htmlFor="Name" className="font-bold border-1">
          Event Name
        </label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Haldi"
          className="input border-2 py-1 px-3 "
        />

        <label htmlFor="Name" className="font-bold border-1">
          Event Name
        </label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Mehndi"
          className="input border-2 py-1 px-3 "
        />

        <label htmlFor="Name" className="font-bold border-1">
          Event Name
        </label>
        <input
          type="text"
          name=""
          id=""
          placeholder="sagai"
          className="input border-2 py-1 px-3 "
        />

        <label htmlFor="Name" className="font-bold border-1">
          Event Name
        </label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Ras Garba"
          className="input border-2 py-1 px-3 "
        />

        <label htmlFor="Name" className="font-bold border-1">
          Event Name
        </label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Wedding"
          className="input border-2 py-1 px-3 "
        />
          <input type="file" name={`file`} id={`file`} />

        {fileInputs.map((input, index) => (
          <div key={input.key}>
            <input type="file" name={`file${index}`} id={`file${index}`} />
          </div>
        ))}

        <button
          type="button"
          onClick={addFileInput}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold border-1 py-2 px-4 rounded"
        >
          One More
        </button>
        <label htmlFor="Name" className="font-bold border-1">
        Map Location
        </label>
        <input
          type="text"
          name=""
          id=""
          placeholder="https://example.com"
          className="input border-2 py-1 px-3 "
        />
        <label htmlFor="Name" className="font-bold border-1">
        Venue Location
        </label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Saydi,Torda,Bhiloda,Gujarat"
          className="input border-2 py-1 px-3 "
        />
        <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold border-1 py-2 px-4 rounded">
            SUBMIT
        </button>
      </form>
    </div>
  );
};

export default GeneralWedding;
