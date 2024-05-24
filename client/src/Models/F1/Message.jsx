import React from "react";

const Message = ({data}) => {
  console.log(data.map_url)
  return (
    <div
      className="bg-gradient-to-r from-red-100  to-pink-300 h-screen flex justify-center items-center"
      id="mapSection"
    >
      <iframe
        src={
         `${data.map_url}`
        }
        className="w-96 h-72"
      ></iframe>
      <div className="text-3xl ml-14" id="bo">
        <h2 className="font-bold">Venue:</h2>
        <p className="border-2 border-black p-2 lg:p-5 w-full lg:w-[32rem] rounded-tl-xl rounded-br-2xl">
          {data.location}
        </p>
      </div>
    </div>
  );
};

export default Message;
