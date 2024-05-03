import React from "react";

const Message = () => {
  return (
    <div
      className="bg-gradient-to-r from-red-100  to-pink-300 h-screen flex justify-center items-center"
      id="mapSection"
    >
      <iframe
        src={
          "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5137.253696733627!2d73.31048892964125!3d23.80787379985987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1702226443945!5m2!1sen!2sin"
        }
        className="w-96 h-72"
      ></iframe>
      <div className="text-3xl ml-14" id="bo">
        <h2 className="font-bold">Venue:</h2>
        <p className="border-2 border-black p-2 lg:p-5 w-full lg:w-[32rem] rounded-tl-xl rounded-br-2xl">
          Saydi, Torda, Ta :-Bhiloda, Dist :- Aravalli
        </p>
      </div>
    </div>
  );
};

export default Message;
