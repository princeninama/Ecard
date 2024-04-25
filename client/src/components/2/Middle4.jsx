import React from "react";

const Middle4 = () => {
  return (
    <div className="bg-gradient-to-t from-orange-200 pt-16 lg:pt-52 pl-4 lg:pl-24 pb-12 lg:pb-0 to-yellow-100 h-screen" id="mapSection">
      <div className="flex flex-col lg:flex-row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5137.253696733627!2d73.31048892964125!3d23.80787379985987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1702226443945!5m2!1sen!2sin"
          className="w-full lg:w-1/2 h-64 lg:h-[22rem] lg:mr-4 lg:mb-0"
          title="Map"
        ></iframe>
        <div className="mt-4 lg:mt-0 lg:ml-4 text-xl lg:text-3xl font-serif">
          <h2 className="font-bold">Venue:</h2>
          <p className="border-2 border-black p-2 lg:p-5 w-full lg:w-[32rem] rounded-tl-xl rounded-br-2xl">
            Saydi, Torda, Ta :-Bhiloda, Dist :- Aravalli
          </p>
        </div>
      </div>
    </div>
  );
};

export default Middle4;
