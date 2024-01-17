import React from "react";

const Message = () => {
  return (
    <div className="bg-gradient-to-r from-red-100  to-pink-300 h-[750px] item-center" id="mapSection">
      <iframe
        src={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5137.253696733627!2d73.31048892964125!3d23.80787379985987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1702226443945!5m2!1sen!2sin"}
        className="w-[300px] h-56 lg:m-[15rem] lg:ml-[35rem] absolute mt-[5rem] ml-3"
      ></iframe>
    </div>
  );
};

export default Message;
