import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:h-screen h-[73rem] p-4 lg:p-12 bg-gradient-to-r from-orange-300 via-pink-200 to-red-300" id="familySection">
      {/* Groom's Team */}
      <div className="bg-red-200 w-full lg:w-1/2 shadow-2xl p-4 lg:p-12">
        <h1 className="text-4xl font-serif text-center mb-8">Groom's Team</h1>
        {[...Array(4)].map((_, index) => (
          <div className="flex mt-4" key={index}>
            <div className="border rounded-full border-black h-20 w-20 "></div>
            <div className="text-2xl font-mono mt-8 ml-4">
              Ninama Prince Jagdishbhai
            </div>
          </div>
        ))}
      </div>

      {/* Bride's Team */}
      <div className="bg-orange-200 w-full lg:w-1/2  shadow-2xl p-4 lg:p-12 mt-4 lg:mt-0">
        <h1 className="text-4xl font-serif text-center mb-8">Bride's Team</h1>
        {[...Array(4)].map((_, index) => (
          <div className="flex mt-4" key={index}>
            <div className="border rounded-full border-black h-20 w-20 "></div>
            <div className="text-2xl font-mono mt-8 ml-4">
              Ninama Prince Jagdishbhai
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
