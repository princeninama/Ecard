import "../../css/mainpage.css";
import { useState } from "react";

const Middlebox = () => {
  const [selectedCircle, setSelectedCircle] = useState(null);

  const handleCircleClick = (circleId) => {
    setSelectedCircle(circleId);
  };

  const circles = [
    { id: 1, text: "Birthday" },
    { id: 2, text: "Text 2" },
    { id: 3, text: "Text 3" },
    { id: 4, text: "Text 4" },
    { id: 5, text: "Text 5" },
    { id: 6, text: "Text 6" },
  ];

  return (
    <div className="mx-2 md:mx-4 lg:mx-6 h-screen xl:mx-8 my-6 h-60 rounded-lg overflow-hidden relative shadow-lg flex justify-center items-center">
      <div className="absolute inset-x-0 z-10 top-8 text-center text-2xl font-semibold text-gray-600"></div>
      <div className="absolute w-full h-full bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200"></div>
      <div className="absolute mt-44 " style={{ top: "-30px" }}>
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-400 rounded-md py-3 pl-12 pr-4 focus:outline-none focus:border-indigo-500 w-full md:w-80 h-10 text-gray-700 bg-white"
        />

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-4 top-3 text-gray-600"
        >
          <path
            d="M17.928 1.048c.013-.064.13-.064.144 0 .115.543.38 1.51.875 2.005.495.496 1.462.76 2.006.875.063.013.063.13 0 .144-.544.115-1.51.38-2.006.875-.496.495-.76 1.462-.875 2.005-.013.064-.13.064-.144 0-.115-.543-.38-1.51-.875-2.005-.495-.496-1.462-.76-2.006-.875-.063-.013-.063-.13 0-.144.544-.115 1.51-.38 2.006-.875.496-.495.76-1.462.875-2.005ZM13.067 4.046c-.012-.061-.122-.061-.134 0-.133.67-.477 2.044-1.16 2.727-.683.683-2.057 1.027-2.727 1.16-.061.012-.061.122 0 .134.67.133 2.044.477 2.727 1.16.683.683 1.027 2.057 1.16 2.727.012.061.122.061.134 0 .133-.67.477-2.044 1.16-2.727.683-.683 2.057-1.027 2.727-1.16.061-.012.061-.122 0-.134-.67-.133-2.044-.477-2.727-1.16-.683-.683-1.027-2.057-1.16-2.727Z"
            fill="currentColor"
          />
          <path
            d="M2 11.5a7.5 7.5 0 0 0 12.202 5.843l4.156 4.157a1 1 0 1 0 1.415-1.414l-4.193-4.193A7.46 7.46 0 0 0 16.984 12h-1.505A6 6 0 1 1 9 5.52V4.017A7.5 7.5 0 0 0 2 11.5Z"
            fill="currentColor"
          />
        </svg>
      </div>
      {/* {circles.map((circle) =>(
          <div
          key={circle.id}
          className={`text-center cursor-pointer `}
          onClick={() => handleCircleClick(circle.id)}
          >
          <div className={`w-12 h-12 bg-white rounded-full transition-shadow shadow-slate-900    ${selectedCircle === circle.id ? 'shadow-sm' :''}`}></div>
          
          </div>
        ))} */}
      <div className="absolute  w-full flex justify-around">
        <div className="bg-white h-40 rounded-2xl w-32 flex justify-center items-center">Birthday</div>
        <div className="bg-white h-40 rounded-2xl w-32 flex justify-center items-center">
        Valentine's Day:
        </div>
        <div className="bg-white h-40 rounded-2xl w-32 flex justify-center items-center">Wedding:</div>
        <div className="bg-white h-40 rounded-2xl w-32 flex justify-center items-center">Holiday Celebrations:</div>
        <div className="bg-white h-40 rounded-2xl w-32 flex justify-center items-center">Anniversary (Non-Wedding):</div>
      </div>
      <div className="absolute mt-96  w-full flex justify-around">
        <div className="bg-white h-40 rounded-2xl w-32 flex justify-center items-center">Graduation:</div>
        <div className="bg-white h-40 rounded-2xl w-32 flex justify-center items-center">Baby Shower:</div>
        <div className="bg-white h-40 rounded-2xl w-32 flex justify-center items-center">Retirement Party:</div>
        <div className="bg-white h-40 rounded-2xl w-32 flex justify-center items-center">Farewell Party</div>
        <div className="bg-white h-40 rounded-2xl w-32 flex justify-center items-center">Engagement Party</div>
      </div>
    </div>
  );
};

export default Middlebox;
